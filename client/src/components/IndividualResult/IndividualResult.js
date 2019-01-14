/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////////////
import React, {Component} from "react";
import API from '../../utils/API';
import axios from 'axios';
/////////////////////////////////////////////// /* Class */ ////////////////////////////////////////////////////////
export default class IndividualResult extends Component {

  constructor(){
    super();
    this.state={
      saved: null
    }
    this.save = this.save.bind(this);
  }; // End of ConstructorS


  save(){

    console.log("Saved Article Clicked")
    let that = this;
    API.saveArticle({
      title : this.props.title,
      authors: this.props.authors,
      description: this.props.description,
      link : this.props.link,
      image: this.props.image
    }).then(that.setState({
      saved: true
    }));

  }

  render() {
    return (
      <li className="collection-item">
        <img className = "img-fluid img-thumbnail rounded right" style={{height: "100px", width: "100px"}} src={this.props.image}/>
        <br/>
        <strong> Title: </strong>  {this.props.title}
        <br/>
        <strong> Authors: </strong> {this.props.authors}
        <br/>
        <strong> description: </strong> {this.props.description}
        <br/>
        <strong> Link: </strong> <a href={this.props.link} target="_blank"> {this.props.link} </a>
        <br/>
       
        {this.state.saved? (<button style={{"margin-top" : "10px"}} id={this.props.id} className="btn btn-primary right-align"> Book Saved </button>):
          (<button style={{"margin-top" : "10px"}} id={this.props.id} onClick={this.save} className="btn btn-success right-align"> Save </button>)
        }

      </li>

    ); // End of Return
  } // End of Render
} // End of Class
