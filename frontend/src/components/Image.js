import React from "react";
import "./Image.css";

const Image = (props) => {
  return (
    <button id={props.id} onClick={props.onClick}>
      <img className="image" src={props.src} alt={props.alt} />
    </button>
  );
};

export default Image;
