import axios from "axios";

// headers: {
//     'X-RapidAPI-Key': '89f20f5b05msh6eaec1a26f1eb01p11a87djsnc72d34e3798c',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "89f20f5b05msh6eaec1a26f1eb01p11a87djsnc72d34e3798c",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  console.log(data, "ppap");
  return data;
};
