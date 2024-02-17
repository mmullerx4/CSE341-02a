//This file is where logic takes place
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
   mongodb
   .getDb()
   .db()
   .collection('characters')
   .find()
   .toArray().then((err, lists) => {
      if (err) {
        res.status(400).json({ message: err});
      }
        res.setHeader('Content-Type', 'application/json'); //response header indicates JSON
        res.status(200).json(lists); //sends JSON response
  });
};
  
const getSingle = async (req, res) => {
  const characterId = new ObjectId(req.params.id);
  mongodb
   .getDb()
   .db()
   .collection('characters')
   .find({ _id: characterId})
   .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err});
      }
        res.setHeader('Content-Type', 'application/json'); //response header indicates JSON
        res.status(200).json(result[0]); //sends JSON response
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
     const characterId = new ObjectId(req.params.id);
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
       .replaceOne({ _id: characterId }, character);
     console.log(response);
     if (response.modifiedCount > 0) {
       res.status(204).send();
    } else {
       res.status(500).json(response.error || 'Some error occurred while updating the character.');
     }
   };

const deleteCharacter = async (req, res) => {
  const characterId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('characters').deleteOne({ _id: characterId }, true);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
 } else {
    res.status(500).json(response.error || 'Some error occurred while updating the character.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createCharacter,
  updateCharacter,
  deleteCharacter
};

