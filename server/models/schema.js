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
  console.log('getting user data');
  const foundForm = await UserForm.find({ name: 'Alex' });
  console.log('foundForm', foundForm);
  return foundForm;
};

const setUserData = async (userData) => {
  console.log('setting user data');
  const setForm = await UserForm.create(userData);
  console.log('after adding to db', setForm);
  return setForm;
};

module.exports = { getUserData, setUserData };
