import React from "react";
import backgroundDot from "../../../Assets/salam_background_edited1.png";
import logo from "../../../Assets/SLogo1.png";
import "./Main.css";
import { useRecoilState } from "recoil";
import { websiteLanguageState } from "../../../RecoilResources/Atoms";
import { getLanguagePhrase } from "../../../Utilities/Helpers";
import { AboutUs } from "../../Reusables";
const Main = function () {
  const [lang] = useRecoilState(websiteLanguageState);
  return (
    <div
      className="Body"
      style={{
        backgroundImage: `url(${backgroundDot})`,
        backgroundSize: "50px"
      }}
    >
      <div className="intro">
        <img src={logo} width={350} alt="logo"></img>
        <br />
        <p className="sub-text">{getLanguagePhrase(lang, "contactUs")}</p>
      </div>
      <AboutUs title={getLanguagePhrase(lang, "WhatsSalam")} description={getLanguagePhrase(lang, "SalamIs")} />
      <AboutUs title={getLanguagePhrase(lang, "HowAreYouFunded")} description={getLanguagePhrase(lang, "FundedBy")} />
      <AboutUs title={getLanguagePhrase(lang, "HowCanYouPersistThis")} description={getLanguagePhrase(lang, "Future")} />
      <AboutUs title={getLanguagePhrase(lang, "WhoandWhy")} description={getLanguagePhrase(lang, "Founder")} />
    </div>
  );
};

export default Main;
