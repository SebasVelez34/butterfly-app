import { Mood } from '../../db/models';

//TODO: Handle errors properly
const getMoods = async () => {
  try {
    const moods = await Mood.find();
    return moods;
  } catch (error) {
    return error;
  }
}


export default {
  getMoods
}