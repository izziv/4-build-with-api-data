
const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-02-16&to=2023-02-16&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}&pageSize=10`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }