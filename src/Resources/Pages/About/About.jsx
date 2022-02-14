import React from "react";
import "./About.css";
import { useRecoilState } from "recoil";
import { websiteLanguageState } from "../../../RecoilResources/Atoms";
import { getLanguagePhrase, getLanguageConstant } from "../../../Utilities/Helpers";
import { AboutUs } from "../../Reusables";
import { SignUpBar } from "../../Components";
const About = function () {
  const [lang] = useRecoilState(websiteLanguageState);
  return (
    <div
      className="Body"
    >
      <AboutUs
        title={getLanguagePhrase(lang, "Story")}
        description={getLanguagePhrase(lang, "StoryPhrase")}
        video={getLanguageConstant(lang, "OurStoryVideo")}
      />
      <AboutUs
        title={getLanguagePhrase(lang, "HowAreYouFunded")}
        description={getLanguagePhrase(lang, "FundedBy")}
      />
      <AboutUs
        title={getLanguagePhrase(lang, "HowCanYouPersistThis")}
        description={getLanguagePhrase(lang, "Future")}
      />
      <AboutUs
        title={getLanguagePhrase(lang, "WhoandWhy")}
        description={getLanguagePhrase(lang, "Founder")}
      />
      <SignUpBar />
    </div>
  );
};

export default About;
