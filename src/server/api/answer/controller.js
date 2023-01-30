import Repository from './repository';
import { Types } from 'mongoose';

const saveAnswers = async (req, res) => {
  try {
    const { companyId } = req.params;
    const answers  = req.body;
    const data = {
      companyId: Types.ObjectId(companyId),
      ...answers
    };
    const company = await Repository.saveAnswers({ data })
    res.send(company);
  } catch (err) {
    return res.status(500).send({
      status: err.message
    });
  }
};

export default {
  saveAnswers
}