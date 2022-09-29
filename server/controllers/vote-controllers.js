const formModel = require('../models/schema.js');

const getForm = async (req, res) => {
  try {
    const gotForm = await formModel.getUserData();
    res.json(gotForm);
    res.status(200);
  } catch (err) {
    res.status(400);
  }
};

const setForm = async (req, res) => {
  try {
    console.log('setting formData');
    const newForm = await formModel.setUserData(req.body);
    console.log(newForm);
    res.json(newForm);
    res.status(201);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

module.exports = { getForm, setForm };
