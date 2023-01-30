import fetch from 'isomorphic-fetch'
const { BUTTERFLY_API_PROXY = "http://localhost:3000/api" } = process.env;

async function saveAnswers({ answers, companyId }) {
  const url = `${BUTTERFLY_API_PROXY}/answer/${companyId}`;
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(answers)
  });
  return response;
}

export default {
  saveAnswers
}