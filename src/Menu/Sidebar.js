import React, { useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar(props) {
  const sidebar = useRef(null);
  var lastScrollTop = 0;

  useEffect(() => {
    const hideScrollbar = () => {
      var scrollTop = window.pageYOffset;
      if (window.scrollY > lastScrollTop && window.scrollY > 200) {
        sidebar.current.style.top = "-6em";
      } else {
        sidebar.current.style.top = "0";
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", hideScrollbar);
    return () => {
      window.removeEventListener("scroll", hideScrollbar);
    };
  }, []);

  return (
    <div>
      <div id="sidebar" className="sidebar" ref={sidebar}>
        <div className="logo">
          <p>SHU</p>
          <p>SHU</p>
        </div>
      </div>
      <div className="menubar">
        <button className="menubtn" onClick={props.toggleSidebar}>
          {props.openClose ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
      </div>
    </div>
  );
}
