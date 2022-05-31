import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Products from "../Products/Products";
import styles from "./Bars.module.css";

export default function Menu(props) {
  const [show, setShow] = React.useState(false)
  const styles = {
    opacity: show ? "1" : "0"
  }
  let navigate = useNavigate();
  return (
    //    <div className={styles.container}></div>
    <div className={props.bars ? "menu menu--open" : "menu"}>
      <div>
        <ul>
          <div onMouseOver = {() => setShow(true)} onMouseLeave = {()=>setShow(false)} className="hoverRadius">
            <li id="projects" onClick={() => navigate("/products")}>
              products
            </li>
            
          </div>
          <div onMouseOver = {() => setShow(true)} onMouseLeave = {()=>setShow(false)} style = {styles} className="projects">
        <li>bestsellers</li>
        <li onClick={() => navigate("/products")}>show all</li>
      </div>
          <li>
            <Link to="aboutUsContainer" smooth={true} duration={1000}>
              about us
            </Link>
          </li>
          <li>
            <Link to="newsContainer" smooth={true} duration={1000}>
              news
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              contact
            </Link>
          </li>
        </ul>

        <div className="socials">
          <p>
            <a href = "https://www.facebook.com/" ><FaFacebookF /></a>
          </p>
          <p>
           <a href = "https://instagram.com/"><FaInstagram /></a> 
          </p>
          <p>
          <a href = "https://twitter.com/"><FaTwitter /></a>
          </p>
        </div>
      </div>
      
    </div>
  );
}
