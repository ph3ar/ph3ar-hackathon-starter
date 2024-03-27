const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  steamid: String,
  personaname: String,
  avatarfull: String,
  realname: String,
  loccountrycode: String,
  // Include any other fields you need
});

module.exports = mongoose.model('Profile', ProfileSchema);
