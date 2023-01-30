import { Mood, Company } from './index';

const fetchInitialData = ({ companyId }) => {
  const companyData =  Company.fetchCompanyData({ companyId });
  const moods = Mood.fetchMoods();

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