import { Mood, Company } from './index';

const fetchInitialData = async({ companyId }) => {
  const companyData =  await Company.fetchCompanyData({ companyId });
  const moods = await Mood.fetchMoods();

  const promise = new Promise((resolve, reject) => {
    resolve({
      company: companyData,
      mood: moods
    })
  });

  return promise
}

export default {
  fetchInitialData
}