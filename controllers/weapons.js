//This file is where logic takes place
class YourClientErrorType extends Error {
  constructor(message) {
    super(message);
    this.name = 'YourClientErrorType';
  }
}

const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const lists = await mongodb
      .getDb()
      .db()
      .collection('weapons')
      .find()
      .toArray();
 
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  } catch (err) {
    console.error(err);

    if (err instanceof YourClientErrorType) {
      res.status(400).json({ message: err.message});
  } else {
    res.status(500).json({ message: 'Internal server error' });
  }
}
};
  
const getSingle = async (req, res) => {
  try {
    const weaponId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('weapons')
      .find({ _id: weaponId })
      .toArray()
      
        res.setHeader('Content-Type', 'application/json');
        if (result.length > 0) {
          res.status(200).json(result[0]);
        } else {
          res.status(404).json({ message: 'Weapon not found' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
      }
};
 
 
const createWeapon = async (req, res) => {
  try {
    const weapon = {
      Name: req.body.Name,
      weight: req.body.weight,
      color: req.body.color
    };
    
    const response = await mongodb.getDb().db().collection('weapons').insertOne(weapon);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the weapon.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error'});
  }
};

const updateWeapon = async (req, res) => {
  try {
    const weaponId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const weapon = {
      Name: req.body.Name,
      weight: req.body.weight,
      color: req.body.color
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('weapons')
      .replaceOne({ _id: weaponId }, weapon);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
  } else {
      res.status(500).json(response.error || 'Some error occurred while updating the weapon.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error'});
  }
};

const deleteWeapon = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid character Id. Cannot find character.');
      }
      const weaponId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('weapons').deleteOne({_id: weaponId});
    if (response.deletedCount > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while deleting the weapon.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json( { message: 'Internal server error'});
  }
};

module.exports = {
  YourClientErrorType,
  getAll,
  getSingle,
  createWeapon,
  updateWeapon,
  deleteWeapon
};

