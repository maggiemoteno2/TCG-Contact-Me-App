const mongoose = require('mongoose')

const CompanySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  website_address: { type: String, required: true },
  physical_address: { type: String, required: true },

})

var Company = mongoose.model('Company', CompanySchema)


module.exports = Company;