import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import Titlecards from "../../components/TitleCards/Titlecards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img
          src={hero_banner}
          alt="Hero Banner - Ancient Quest Adventure"
          className="banner-img"
        />
        <div className="hero-caption">
          <img
            src={hero_title}
            alt="Hero Title - The Protector"
            className="caption-img"
          />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn" aria-label="Play Trailer">
              <img src={play} alt="Play Icon" />
              Play
            </button>
            <button className="btn dark-btn" aria-label="More Information">
              <img src={info} alt="Info Icon" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <section className="content-section">
        <Titlecards title="Popular on Netflix" />
      </section>
      <div className="more-cards">
        <Titlecards title="Blockbuster Movies" />
        <Titlecards title="Only on Netflix" />
        <Titlecards title="Upcoming" />
        <Titlecards title="Top Picks" />
      </div>
    </div>
  );
};

export default Home;
