import { Mood, Company, Question } from './index';

const fetchInitialData = async ({ companyId, value }) => {
  const companyData = await Company.fetchCompanyData({ companyId });
  const moods = await Mood.fetchMoods();
  const questions = await Question.fetchQuestions({ companyId });

  const promise = new Promise((resolve, reject) => {
    resolve({
      company: companyData,
      mood: moods,
      questions,
      moodValue: value
    })
  });

  return promise
}

export default {
  fetchInitialData
}