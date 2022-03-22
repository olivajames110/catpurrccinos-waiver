import React from "react";
import "./Card.css";
import "../../../assets/styles/transitionAnimations/leftRight.css";
import { CSSTransition } from "react-transition-group";
const Card = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames={
        props.directionIsToLeft ? "card-slide-left" : "card-slide-right"
      }
      mountOnEnter
      unmountOnExit
    >
      <div className="card-container">{props.children}</div>
    </CSSTransition>
  );
};
export default Card;
