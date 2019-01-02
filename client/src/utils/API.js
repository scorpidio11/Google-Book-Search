import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  saveArticle: function(articleObject){
    return axios.post('/saveArticle', articleObject);
  },
  getSavedArticles: function(){
    return axios.get('/getSavedArticles');
  },
  deleteSavedArticle: function(id){
    return axios.delete('/deleteSavedArticle', {data: {articleId: id}})
  }

};