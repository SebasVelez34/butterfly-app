import fetch from 'isomorphic-fetch'
const { BUTTERFLY_API_PROXY = "http://localhost:3000/api" } = process.env;

function fetchQuestions({ companyId }) {
  const url = `${BUTTERFLY_API_PROXY}/question/${companyId}`;

  return fetch(url)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => {
      console.warn(error)
      return null
    });
}

export default {
  fetchQuestions
}