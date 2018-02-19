import React from "react";
import "./Card.css";

const Card = ({ children }) => (
  <section className="Card card">
    <div className="card-content">{children}</div>
  </section>
);

const Title = ({ subtitle, children }) => (
  <div className="card-title">
    <div>{children}</div>
    <div className="card-subtitle">{subtitle}</div>
  </div>
);

// const Image = ({  }) => (

// );

const Info = ({ icon, desc = icon, children }) => (
  <div className="card-info">
    <i className="material-icons" title={desc}>
      {icon}
    </i>
    <span>
      {children}
    </span>
  </div>
);

Card.Title = Title;
Card.Info = Info;

// add an Avatar and Info sub-component
// to be used in Person

export default Card;
