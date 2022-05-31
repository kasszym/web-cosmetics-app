import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import newsData from "./newsData";

export default function NewsContainer() {
  const [index, changeIndex] = React.useState(0);
  const { id, name, description, image } = newsData[index];

  console.log(index);

  const nextIndex = () => {
    changeIndex((prevValue) => prevValue + 1);
  };
  const prevIndex = () => {
    changeIndex((prevValue) => prevValue - 1);
  };

  return (
    <div className="container--news">
      <div className="newscontainer-img">
        <img src={image} />
        <div className="newscontainer-buttons">
          <button
            id={index == 0 ? "hide" : ""}
            onClick={prevIndex}
            className="btnNews"
          >
            <RiArrowLeftSLine />
          </button>
          <button
            id={index == newsData.length - 1 ? "hide" : ""}
            onClick={nextIndex}
            className="btnNews"
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
      <div className="newscontainer-texts">
        <div className="newscontainer-title">Our New Products</div>
        <div className="newscontainer-desc">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.{" "}
        </div>
      </div>
    </div>
  );
}
