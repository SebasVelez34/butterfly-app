import { Answer } from '../../db/models';

const saveAnswers = async ({ data }) => {
  try {
    const answers = await Answer.create(data);
    return answers;
  } catch (error) {
    console.log("****", error);
    return error;
  }
}


export default {
  saveAnswers
}