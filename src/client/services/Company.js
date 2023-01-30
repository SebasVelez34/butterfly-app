import fetch from 'isomorphic-fetch'
const { BUTTERFLY_API_PROXY = "http://localhost:3000/api" } = process.env;

function fetchCompanyData({ companyId }) {
  const url = `${BUTTERFLY_API_PROXY}/company/${companyId}`;

  return fetch(url)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => {
      console.warn(error)
      return null
    });
}

export default {
  fetchCompanyData
}