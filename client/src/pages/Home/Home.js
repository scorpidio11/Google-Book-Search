/////////////////////////////////////////////// /* Import Stock React Components */ ////////////////////////////////////////////////////////
import React, {Component} from "react";

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import API from "../../utils/API";
import Nav from '../../components/NavBar';

class Home extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      limit: null
    };

    this.newQuery = this.newQuery.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
  }


  newQuery({searchParams}){
    // console.log(JSON.stringify(searchParams))
    let {topic, limit} = searchParams;
    this.setState({limit}); // Set the limit of Articles to Show
    let queryString = `${topic}`;
    this.searchArticles(queryString);
  }

  searchArticles = query => {
    API.search(query).then(res => {
    let articlesArray = [];

    res.data.items.map((item) => {
      const {title, authors, description, infoLink, imageLinks} = item.volumeInfo
        articlesArray.push({title: title, authors: authors, description: description, link: infoLink, image: imageLinks});
      });

console.log(res.data.items, articlesArray, "abc")
    this.setState(prevState => ({
      articles: [...prevState].concat(articlesArray).splice(0, this.state.limit)
    }), console.log(this.state.limit))

    // console.log("state is " + JSON.stringify(this.state));
  }).catch(err => console.log(err));
}; // End of searchArticles

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //

  render() {
    // console.log("New is " + JSON.stringify(this.state))
    return (
    <React.Fragment>
      <Nav/>
        <div className = "container">
          <SearchForm newQuery={this.newQuery}/>
          <Results results={this.state}/>
        </div>
    </React.Fragment>
    )
  } // End of Render
} // End of Class

export default Home;
