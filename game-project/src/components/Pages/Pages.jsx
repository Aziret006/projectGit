import React from "react";
import "./page.scss";
export default function Pages() {
  return (
    <div className="pages">
      <h1>The Witcher 3: Wild Hunt Goty</h1>
      <iframe
        width="700"
        height="415"
        className="youtube"
        src="https://www.youtube.com/embed/gIWTpB0p5o8?si=yoy-vr8YnshWTajM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
        </iframe>
      <div className="pages_all">
        <div className="pages_block_flex">
          <div className="pages_block">
            <h4>Standart Edition</h4>
            <p>$169.99</p>
            <div className="border"></div>
          </div>
          <div className="pages_block">
            <h4>Standart Edition</h4>
            <p>$169.99</p>
            <div className="border"></div>
          </div>
          <div className="pages_block">
            <h4>Standart Edition</h4>
            <p>$169.99</p>
            <div className="create_border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
