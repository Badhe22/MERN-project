const mongoose = require('mongoose');

const businessUserSchema = new mongoose.Schema({
  companyName: String,
  businessType: String,
  companyAddress: String,
  // Add more fields as needed
});

const BusinessUser = mongoose.model('BusinessUser', businessUserSchema);

module.exports = BusinessUser;
