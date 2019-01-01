import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
//const APIKEY = "AIzaSyAXQu_FRtECzHLsQXyk4f1NO5imF2g4gHQ";

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



