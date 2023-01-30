import fetch from 'isomorphic-fetch'
const { BUTTERFLY_API_PROXY = "http://localhost:3000/api" } = process.env;

function fetchMoods() {
  const url = `${BUTTERFLY_API_PROXY}/mood`;

  return fetch(url)
    .then((data) => data.json())
    .then((data) => data)
    .catch((error) => {
      console.warn(error)
      return null
    });
}

export default {
  fetchMoods
}