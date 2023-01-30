import { Question } from '../../db/models';

//TODO: Handle errors properly
const getQuestionsByCompany = async ({ companyId }) => {
  try {
    const company = await Question.find({ companyId });
    return company;
  } catch (error) {
    return error;
  }
}


export default {
  getQuestionsByCompany
}