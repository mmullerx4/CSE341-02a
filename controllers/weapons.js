//This file is where logic takes place
const mongodb = require('../db/connect');
const ObjectID = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('weapons').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json'); //response header indicates JSON
    res.status(200).json(lists); //sends JSON response
  });
};
  
const getSingle = async (req, res) => {
  const weaponId = new ObjectID(req.params.id);
  const result = await mongodb.getDb().db().collection('weapons')
  .find({ _id: weaponId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
 
 
const createWeapon = async (req, res) => {
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
};

const updateWeapon = async (req, res) => {
  const weaponId = new ObjectID(req.params.id);
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
};

const deleteWeapon = async (req, res) => {
  const weaponId = new ObjectID(req.params.id);
  const response = await mongodb.getDb().db().collection('weapons').deleteOne({ _id: weaponId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the weapon.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createWeapon,
  updateWeapon,
  deleteWeapon
};

