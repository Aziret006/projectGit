import React, { useState } from "react";
import "./style.scss";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { RiHome6Line } from "react-icons/ri";

export default function Header({ data }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter((game) => {
    if (typeof game === "string") {
      return game.toLowerCase().includes(query.toLowerCase());
    } else if (typeof game === "object" && game.name) {
      return game.name.toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });

  return (
    <div className="backg_header">
      <div className="wrap">
        <div className="header_all">
          <button className="custom-button" onClick={() => alert("не работает!!!")}>
            <FaBarsStaggered />
            каталог игр
          </button>
          <div className="header_center">
            <h1>Game store</h1>
          </div>
          <div className="header_end">
            <div className="header_title" onClick={() => alert("не работает!!!")}>
              <h4>Войти</h4>
              <span className="h_200"></span>
              <h4>Регистрация</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
