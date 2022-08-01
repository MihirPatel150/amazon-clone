import React from "react";
import Product from "./Product";
import amazonPoster from "../assets/amazon-prime-poster.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img src={amazonPoster} alt="" className="home--containerImage" />
      </div>

      <div className="home--row">
        <Product />
        <Product />
      </div>
      <div className="home--row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home--row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
