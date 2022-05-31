import React from "react";
import Product from "./Product";
import data from "./data";
import Categories from "./Categories";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Products(props) {
  const [dataProducts, setDataProducts] = React.useState(data);

  let navigate = useNavigate();

  const filterProducts = (category) => {
    if (category === "all") {
      setDataProducts(data);
      return;
    }
    const newProducts = data.filter((item) => item.bestseller === category);
    setDataProducts(newProducts);
  };

  function handleSortASC() {
    const sortedData = [...dataProducts].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setDataProducts(sortedData);
  }
  function handleSortDESC() {
    const sortedData = [...dataProducts].sort((a, b) => {
      return a.name < b.name ? 1 : -1;
    });
    setDataProducts(sortedData);
  }
  function handleSortASCPrice() {
    const sortedData = [...dataProducts].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setDataProducts(sortedData);
  }
  function handleSortDESCPrice() {
    const sortedData = [...dataProducts].sort((a, b) => {
      return a.price < b.price ? 1 : -1;
    });
    setDataProducts(sortedData);
  }

  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="product-bg">
      <div className="product-site">
        <div id="products2">Our Products</div>
        <div>
          <section className="section search">
            <div className="mateuszgajo">
              <form className="search-form">
                <div className="form-control">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Search for products.."
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div id="icon">
              <FiSearch />
            </div>
          </section>
          <div id="line"></div>
        </div>

        <div onClick={() => navigate("/")} id="closeSite" className="close">
          <AiOutlineClose />
        </div>
        <div className="count-dropdown">
          <div className="products-count">{dataProducts.length} items</div>
          <div className="dropdown">
            <button className="dropdown-button">
              Sort <MdOutlineKeyboardArrowDown />
            </button>
            <div className="dropdown-content">
              <li onClick={handleSortASC}>a-z</li>
              <li onClick={handleSortDESC}>z-a</li>
              <li onClick={handleSortASCPrice}>price (low to high)</li>
              <li onClick={handleSortDESCPrice}>price (high to low)</li>
            </div>
          </div>
        </div>
        <div className="product-buttons-container">
          <div>
            <Categories filterProducts={filterProducts} />
          </div>
        </div>
        <div className="product-site-products">
          {dataProducts
            .filter((val) => {
              if (searchTerm == "") return val;
              else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
                return val;
            })
            .map((val, key) => {
              return (
                <div>
                  <div key={key}>
                    <Product
                      name={val.name}
                      price={val.price}
                      image={val.image}
                      bestseller={val.bestseller}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
