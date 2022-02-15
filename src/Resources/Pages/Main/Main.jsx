import React from "react";
import logo from "../../../Assets/SLogo1.png";
import "./Main.css";
import { useRecoilState } from "recoil";
import { websiteLanguageState } from "../../../RecoilResources/Atoms";
import { getLanguagePhrase, getLanguageConstant } from "../../../Utilities/Helpers";
import { AboutUs, DualAboutUs } from "../../Reusables";
import { SignUpBar } from "../../Components";
import visionLogo from '../../../Assets/roundWorldResize.png';
import missionLogo from '../../../Assets/mission.jpeg';
import swal from "sweetalert";

const Main = function () {
  const [lang] = useRecoilState(websiteLanguageState);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let signedUp = params.get("signedUp");

  if(signedUp){
    swal(
      getLanguageConstant(lang, "ThankYou"),
      getLanguageConstant(lang, "ThankYouBody"),
      "success"
    )
  }

  return (
    <div
      className="Body"
    > 
      <div className="intro">
        <img src={logo} width={350} alt="logo"></img>
        <br />
        <p className="sub-text">{getLanguagePhrase(lang, "contactUs")}</p>
      </div>
      <SignUpBar />
      <AboutUs
        title={getLanguagePhrase(lang, "WhatsSalam")}
        description={getLanguagePhrase(lang, "SalamIs")}
      />
      <DualAboutUs
        theAbouts={[
          {
            title: getLanguagePhrase(lang, "Mission"),
            description: getLanguagePhrase(lang, "MissionPhrase"),
            icon: missionLogo
          },
          {
            title: getLanguagePhrase(lang, "Vision"),
            description: getLanguagePhrase(lang, "VisionPhrase"),
            icon: visionLogo
          },
        ]}
      />
      <SignUpBar />

    </div>
  );
};

export default Main;
