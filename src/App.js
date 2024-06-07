import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardBlcok from "./components/CardBlcok/CardBlcok";
import cover1 from "./img/image3.png";
import cover2 from "./img/image4.png";
import cover3 from "./img/image5.png";
import cover4 from "./img/image6.png";
import cover5 from "./img/image7.png";
import cover6 from "./img/image8.png";
import cover7 from "./img/image9.png";
import cover8 from "./img/image10.png";
import cover9 from "./img/image11.png";
import cover10 from "./img/image12.png";
import cover11 from "./img/image13.png";
import cover12 from "./img/image14.png";
import Pages from "./components/Pages/Pages";
import { Route, Routes } from "react-router-dom";
import backgroundImage from "./img/orig.webp";

const name = [
  { name: "новинки" },
  { name: "распродажа" },
  { name: "для ps4" },
  { name: "для xbox" },
  { name: "для pc" },
];
export let game = [
  {
    id: 1,
    title: "Witcher 3: Wild Hunt",
    image: cover1,
    language: { text: true, audio: true },
    video: "https://www.youtube.com/embed/FWhZl9rN79c?si=FQ3gY7JgMzhRSsz1",
    price: "$59.99",
    status: "для ps4",
  },
  {
    id: 2,
    title: "Witcher 3: Wild Hunt",
    image: cover2,
    language: { text: true, audio: true },
    video: "https://www.youtube.com/embed/FWhZl9rN79c?si=FQ3gY7JgMzhRSsz1",
    price: "$139.99",
    status: "распродажа",
  },
  {
    id: 3,
    title: "Control",
    image: cover3,
    language: { text: true, audio: true },
    video: "https://www.youtube.com/embed/KbiE8Fuyz1o?si=Tzj4Ini0-Ax5yi0F",
    price: "$129.99",
    status: "новинки",
  },
  {
    id: 4,
    title: "Devil May Cry 5",
    image: cover4,
    language: { text: true, audio: true },
    video: "https://www.youtube.com/embed/dsByjXPGYUE?si=t-e1Ytf0Ibh-o6RS",
    releaseDate: "2015-05-18",
    price: "$159.99",
    status: "распродажа",
  },
  {
    id: 5,
    title: "RAGE 2",
    image: cover5,
    language: { text: true, audio: true },
    video: "https://www.youtube.com/embed/tCz8Tohf7B0?si=c-2lOGBDx8YWWR7D",
    price: "$129.99",
    status: "для pc",
  },
  {
    id: 6,
    title: "Wolfenstein Young Blood",
    image: cover6,
    language: { text: true, audio: true },
    video: "https://www.youtube.com/embed/XfCxamVM9Vw?si=j89YkjQpPleELrOF",
    price: "$20.99",
    status: "для pc",
  },
  {
    id: 7,
    title: "Assassin's Creed",
    image: cover7,
    language: { text: true, audio: true },
    price: "$68.99",
    status: "новинки",
    video: "https://www.youtube.com/embed/4J2tr-r0xoM?si=b7wDM9n82nOAZxqm",
  },
  {
    id: 8,
    title: "Darksiders Genesis",
    image: cover8,
    language: { text: true, audio: true },
    price: "$36.99",
    status: "для xbox",
    video: "https://www.youtube.com/embed/4J2tr-r0xoM?si=b7wDM9n82nOAZxqm",
  },
  {
    id: 9,
    title: "SW: Jedi Fallen Order",
    image: cover9,
    language: { text: true, audio: true },
    price: "$34.99",
    status: "для xbox",
    video: "https://www.youtube.com/embed/4J2tr-r0xoM?si=b7wDM9n82nOAZxqm",
  },
  {
    id: 10,
    title: "Metro: Exodus",
    image: cover10,
    language: { text: true, audio: true },
    price: "$54.99",
    status: "для pc",
    video: "https://www.youtube.com/embed/4J2tr-r0xoM?si=b7wDM9n82nOAZxqm",
  },
  {
    id: 11,
    title: "Metro: Exodus",
    image: cover11,
    language: { text: true, audio: true },
    price: "$69.99",
    status: "для pc",
    video: "https://www.youtube.com/embed/4J2tr-r0xoM?si=b7wDM9n82nOAZxqm",
  },

  {
    id: 12,
    title: "Devil May Cry 5",
    image: cover12,
    language: { text: true, audio: true },
    status: "новинки",
    price: "$55.99",
    video: "https://www.youtube.com/embed/4J2tr-r0xoM?si=b7wDM9n82nOAZxqm",
  },
];

export default function App() {
  return (
    <div>
      <Header data={game} />
      <div
        className="container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Routes>
          <Route path="/" element={<CardBlcok data={game} name={name} />} />
          <Route path="/pages/:id/" element={<Pages data={game} />} />
        </Routes>
      </div>
    </div>
  );
}
