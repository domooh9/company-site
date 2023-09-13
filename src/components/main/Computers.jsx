import React from "react";
import { storeProducts } from "../computers/data";
import ThemeContextProvider from "../../contexts/ThemeContext";
import Footer from "../Footer";
import Nav from "../Nav";
import "../computers/data.css";

class Computers extends React.Component {
  render() {
    return (
      <>
        <div className="contt">
          <ThemeContextProvider>
            <Nav />
            <div className="computers">
              {storeProducts.map((product) => (
                <div className="product" key={product.id}>
                  <img src={product.img} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.info}</p>
                  <p>Price: ${product.price}</p>
                </div>
              ))}
            </div>

            <Footer />
          </ThemeContextProvider>
        </div>
      </>
    );
  }
}

export default Computers;
