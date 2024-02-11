//This file is where logic takes place
const mongodb = require('../db/connect');
const ObjectID = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('characters').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json'); //response header indicates JSON
    res.status(200).json(lists); //sends JSON response
  });
};
  
const getSingle = async (req, res) => {
  const userId = new ObjectID(req.params.id);
  const result = await mongodb.getDb().db().collection('characters')
  .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
 
 
const createCharacter = async (req, res) => {
  const character = {
    Name: req.body.Name,
    fullName: req.body.fullName,
    background: req.body.background,
    maritalStatus: req.body.maritalStatus,
    personalityType: req.body.personalityType,
    mainHobby: req.body.mainHobby,
    mainCharacteristic: req.body.mainCharacteristic,
    occupation: req.body.occupation
  };
  const response = await mongodb.getDb().db().collection('characters').insertOne(character);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the character.');
  }
};

const updateCharacter = async (req, res) => {
  const userId = new ObjectID(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const character = {
    Name: req.body.Name,
    fullName: req.body.fullName,
    background: req.body.background,
    maritalStatus: req.body.maritalStatus,
    personalityType: req.body.personalityType,
    mainHobby: req.body.mainHobby,
    mainCharacteristic: req.body.mainCharacteristic,
    occupation: req.body.occupation
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('characters')
    .replaceOne({ _id: userId }, character);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the character.');
  }
};

const deleteCharacter = async (req, res) => {
  const userId = new ObjectID(req.params.id);
  const response = await mongodb.getDb().db().collection('characters').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the character.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createCharacter,
  updateCharacter,
  deleteCharacter
};

