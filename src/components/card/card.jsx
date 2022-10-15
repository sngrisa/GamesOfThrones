import React, { useState } from "react";
import "./card.css";
import PropTypes from "prop-types";

const Card = ({ object }) => {
  return (<>
    <li className="cardCharacter">
      <a href={`/chars/${object.id}`}><img src={object?.imageUrl} alt={object.firstName} className={"image-card"} /></a>
      <a href={`/chars/${object.id}`}><p>{object.firstName}</p></a>
    </li>
  </>
  )
};

Card.defaultProps = {
  object: {}
}

Card.propTypes = {
  object: PropTypes.object.isRequired,
}

export { Card };
