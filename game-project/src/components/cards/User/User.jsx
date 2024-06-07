import React, { useState } from "react";
import "./user.scss";
import { NavLink } from "react-router-dom";
export default function User({ data }) {
  return (
    <div className="card_grid">
      {data.map((game) => {
        return (
          <div className="card_page">
            <NavLink to="/pages">
              <img src={game.image} alt="" />
            </NavLink>
            <h4>{game.title}</h4>
            <button>{game.price}</button>
          </div>
        );
      })}
    </div>
  );
}
