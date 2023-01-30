import Repository from './repository';

const getQuestionsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const questions = await Repository.getQuestionsByCompany({ companyId });
    const sortQuestions = questions.sort(() => Math.random() - 0.5);
    res.send(sortQuestions);
  } catch (err) {
    return res.status(500).send({
      status: err.message
    });
  }
};

export default {
  getQuestionsByCompany
}