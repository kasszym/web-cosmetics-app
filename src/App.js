import "./index.css";
import "./data.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products/Products";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import News from "./News/News";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/bestsellers" exact render = {(props) => <Products {...props}/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
