import React, { Component } from "react";

const Home = () => {
  return (
    <div className="home">
      <img src={require(`./jonsnow.jpg`)} alt=":(" />
      <p className="quotes"> “When you play a game of thrones you win or you die.” </p>
      <div className="container">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="item active">
        <img src={require(`./images/jaime.jpeg`)} alt="🤪" />
      </div>

      <div className="item">
        <img src={require(`./images/margaery.jpeg`)} alt="🤪" />
      </div>

      <div className="item">
        <img src={require(`./images/oberyn.jpeg`)} alt="🤪" />
      </div>

      <div className="item">
        <img src={require(`./images/jon.jpeg`)} alt="🤪" />
      </div>

      <div className="item">
        <img src={require(`./images/daenerys.jpeg`)} alt="🤪" />
      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
    </div>
  )
}

export default Home;
