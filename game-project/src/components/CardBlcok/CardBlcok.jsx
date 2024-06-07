import React, { useState } from "react";
import "./style.scss";
import User from "../cards/User/User";

export default function CardBlock({ data, name }) {
  const [query, setQuery] = useState("Бестселлер");

  const handleInputChange = (value) => {
    const filter = data.filter((game) => game.status === value);
    setQuery(filter);
  };
  return (
    <>
      <div className="container">
        <div className="wrap">
          <div className="pages_container">
            <div className="pages_component">
              <button onClick={() => setQuery("Бестселлер")} className="btn">
                Бестселлер
              </button>
              {name.map((name, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleInputChange(name.name)}
                    className="btn"
                  >
                    {name.name}
                  </button>
                );
              })}
            </div>
          </div>
          <User data={query === "Бестселлер" ? data : query} />
        </div>
      </div>
    </>
  );
}
