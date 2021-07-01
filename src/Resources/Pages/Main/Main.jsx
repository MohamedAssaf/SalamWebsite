import React from "react";
import { Footer } from "../../Layout";
import { LanguageButton } from "../../Components";
import backgroundDot from "../../../Assets/salam_background_edited1.png";
import logo from "../../../Assets/SLogo1.png";
import "./Main.css";
import { useRecoilState } from "recoil";
import { websiteLanguageState } from "../../../RecoilResources/Atoms";
import { getLanguagePhrase } from "../../../Utilities/Helpers";
const Main = function () {
  const [lang] = useRecoilState(websiteLanguageState);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundDot})`,
        height: "100vh",
        backgroundSize: "50px",
      }}
    >
      <header className="App-header">
        <img src={logo} width={350} alt="logo"></img>
        <h3 className="release-date">10.11.2021</h3>
        <br />
        <p className="sub-text">{getLanguagePhrase(lang, "contactUs")}</p>
      </header>
      <LanguageButton />
      <Footer></Footer>
    </div>
  );
};

export default Main;
