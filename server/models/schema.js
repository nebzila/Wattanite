const { mongoose } = require('./index.js');

const userFormSchema = new mongoose.Schema({
	name: String,
	postcode: String,
	movie: Object,
	restaurant: Object,
});

/* You have to define the properties that you want to store  */

const UserForm = mongoose.model('UserData', userFormSchema);

const getUserData = async () => {
	const foundForm = await UserForm.aggregate({ _id: 'name' });
	return foundForm;
};

const setUserData = async (userData) => {
	const setForm = await UserForm.create(userData);
	return setForm;
};

module.exports = { getUserData, setUserData };
