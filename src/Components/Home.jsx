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
        <Product
          id={1001}
          title="The lean startup"
          price={600}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id={1002}
          title="LG Ultragear 27GL850 (Black)"
          price={38500}
          image="https://images-eu.ssl-images-amazon.com/images/I/5105GO89I-L._SY300_SX300_QL70_FMwebp_.jpg"
          rating={4}
        />
      </div>
      <div className="home--row">
        <Product
          id={2001}
          title="The lean startup"
          price={600}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id={2002}
          title="Fresh Active Roll On For Men, Anti-perspirant, 50 Ml"
          price={150}
          image="https://m.media-amazon.com/images/I/51BEybNkDzL._SX679_.jpg"
          rating={5}
        />
        <Product
          id={2003}
          title="LG Ultragear 27GL850 (Black)"
          price={38500}
          image="https://images-eu.ssl-images-amazon.com/images/I/5105GO89I-L._SY300_SX300_QL70_FMwebp_.jpg"
          rating={4}
        />
      </div>
      <div className="home--row">
        <Product
          id={2002}
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={145888}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
