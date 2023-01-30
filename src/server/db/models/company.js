import mongoose from '../connection';

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The Company name is required'],
  },
});

const Company = mongoose.model("Company", CompanySchema);

export default Company;