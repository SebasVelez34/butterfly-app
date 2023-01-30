import Repository from './repository';

const getMoods = async (req, res) => {
  try {
    const moods = await Repository.getMoods();
    res.send(moods);
  } catch (err) {
    return res.status(500).send({
      status: err.message
    });
  }
};

export default {
  getMoods
}