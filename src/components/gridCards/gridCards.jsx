import React from "react";
import "./gridCards.css";

const GridCards = (props) => {
  return (
    <>
      <ul className="gridCards">{props.children}</ul>
    </>
  );
};

export { GridCards };
