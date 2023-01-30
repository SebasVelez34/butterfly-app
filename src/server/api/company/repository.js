import { Company } from '../../db/models';

//TODO: Handle errors properly
const companyFindOneById = async ({ id }) => {
  try {
    const company = await Company.findById(id);
    return company;
  } catch (error) {
    return error;
  }
}


export default {
  companyFindOneById
}