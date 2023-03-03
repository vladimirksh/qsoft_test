import React from "react";
import "./Partners.css";
import { partnersList } from "../../utils/allPartners";

function Partners() {
  return (
    <section className="partners">
      <h2 className="partners__title">наши партнёры</h2>
      <ul className="partners__list">
        {partnersList.map((partner, index) => (
          <li className="partners__card" key={index}>
            <img
              className="partners__image"
              src={partner.image}
              alt={partner.title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Partners;
