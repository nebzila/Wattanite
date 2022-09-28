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
		const newForm = await formModel.setUserData(req.body);
		res.json(newForm);
		res.status(201);
	} catch (err) {
		res.status(400);
	}
};

module.exports = { getForm, setForm };
