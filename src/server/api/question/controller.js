import Repository from './repository';

const getQuestionsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const questions = await Repository.getQuestionsByCompany({ companyId });
    res.send(questions);
  } catch (err) {
    return res.status(500).send({
      status: err.message
    });
  }
};

export default {
  getQuestionsByCompany
}