import React from "react";
import "./page.scss";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import { game } from "../../App";

export default function Pages({ data }) {
  const { id } = useParams();

  const games = game.filter((game) => game.id == id);

  console.log(game[0], "test1");
  return (
    <>
      <NavLink to="/">
        <BsArrowLeftSquareFill size={30} className="icons" margintop="20px" />
      </NavLink>
      <div className="pages">
        <h1>{games[0].title}</h1>
        <iframe
          width="700"
          height="415"
          className="youtube"
          src={games[0].video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="pages_all">
          <div className="pages_block_flex">
            <div className="pages_block">
              <h4>Standart Edition</h4>
              <p>{games[0].price}</p>
              <div className="border"></div>
            </div>
            <div className="pages_block">
              <h4>Standart Edition</h4>

              <p>{games[0].price}</p>
              <div className="border"></div>
            </div>
            <div className="pages_block">
              <h4>Standart Edition</h4>

              <p>{games[0].price}</p>
              <div className="border"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
