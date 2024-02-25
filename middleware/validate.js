const validator = require('../helpers/validate');

const saveCharacter = (req, res, next) => {
  const validationRule = {
    Name: 'required|string',
    fullName: 'required|string',
    background: 'required|string',
    maritalStatus: 'required|string',
    personalityType: 'required|string',
    mainHobby: 'required|string',
    mainCharacteristic: 'required|string',
    occupation: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Precondition Failed: Validation failed for character',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveWeapon = (req, res, next) => {
  const validationRule = {
    Name: 'required|string',
    weight: 'required|string',
    color: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Precondition Failed: Validation failed for weapon',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveCharacter,
  saveWeapon
};