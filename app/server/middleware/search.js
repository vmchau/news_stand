import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const searchArticles = (request, response, next) => {
  // starting with one source at a time, no sortBy
  const { source } = request.query;

  const search = `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_KEY}&source=${source}`;

  axios.get(search)
    .then((data) => {
      const articles = data.data.articles.map((article) => {
        const newArticle = article;
        newArticle.source = source;
        return article;
      });
      request.articles = articles;
      next();
    })
    .catch((err) => {
      console.log(err);
      response.status(500);
      response.end();
    });
};

export default searchArticles;
