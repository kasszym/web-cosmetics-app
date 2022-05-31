import React from "react";
import newsData from "./newsData";
import NewsContainer from "./NewsContainer";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function News() {
  let navigate = useNavigate();
  return (
    <div className="newscontainer">
      <div onClick={() => navigate("/")} id="closeSite" className="close">
        <AiOutlineClose />
      </div>
      <NewsContainer />
    </div>
  );
}
