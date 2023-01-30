import mongoose from '../connection';

const MoodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  phrase: {
    type: String,
    required: true,
  }
});

const Mood = mongoose.model("Mood", MoodSchema);

export default Mood;