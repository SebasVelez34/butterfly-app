import mongoose from '../connection';

const AnswerSchema = new mongoose.Schema({
  mood: {
    type: Number,
    required: true,
  },
  answers: {
    type: Object,
    required: true,
  },
  anythingToAdd: {
    type: String,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});

const Answer = mongoose.model("Answer", AnswerSchema);

export default Answer;