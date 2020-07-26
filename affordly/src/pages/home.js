/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 * 
 * Feature Covered:
 * This is the frontend for our Home page.
 * 
 */
 // Modified by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React from "react";
import "react-dropdown/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/home.css";
import a from "../a.jpg";
import b from "../b.jpg";
import c from "../c.jpg";
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : []
    }
  }

  componentDidMount(){
  let allPosts = axios.get("https://the-affordly.herokuapp.com/api/activePosts")
  .then(actPosts => actPosts)
  .then(data => this.setState({posts:data.data}));
  }

  render() {
    return (
      <div className="home">
        <Header />

        <div className="container ">
          <div className="ctr">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={a} alt="First slide" />
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Sell items on just a click.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={b} alt="Second slide" />
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Buy items as you need.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={c} alt="Third slide" />
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Items in your reach.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="search_bar">
            <input
              className="search_field"
              type="text"
              placeholder="Search an item..."
            />
            <div className="btn btn-primary search_button"> Search </div>
          </div>

          <div className="row">
          {this.state.posts.map((value) => {  //Renders all the active posts
              return(
            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src={value.img}
                />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href={"posting/"+value._id}>
                Details
              </a>
            </div>
)
          })}  
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
