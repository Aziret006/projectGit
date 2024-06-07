import React, { useState } from "react";
import "./user.scss";
import { NavLink } from "react-router-dom";
export default function User({ data }) {
  return (
    <div className="card_grid">
      {data.map((game) => {
        return (
          <NavLink to={`/pages/${game.id}`}>
            <div className="card_page">
              <img src={game.image} alt="" />
              <h4>{game.title}</h4>
              <button>{game.price}</button>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
