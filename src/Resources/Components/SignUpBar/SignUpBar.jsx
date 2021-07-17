import React from "react";
import { getLanguageConstant } from "../../../Utilities/Helpers";
import { useRecoilState } from "recoil";
import { websiteLanguageState } from "../../../RecoilResources/Atoms";

import "./SignUpBar.css";
const SignUpBar = function () {
  const [lang] = useRecoilState(websiteLanguageState);

  return (
    <div>
      <div className="sign-up-title">{getLanguageConstant(lang, "SignUpTitle")}</div>
      <div
        className="row sign-up-bar"
        style={
          lang == "en" ? { marginLeft: "25.5%" } : { marginRight: "25.5%" }
        }
      >
        <div
          className="col-md-4 sign-up-div"
          onClick={() => {
            console.log("In Sign Up Shit");
          }}
        >
          <p className="sign-up-button">{getLanguageConstant(lang, "Volunteer")} </p>
        </div>
        <div
          className="col-md-4 sign-up-div"
          onClick={() => {
            console.log("In Sign Up Shit");
          }}
        >
          <p className="sign-up-button">  {getLanguageConstant(lang, "Disabled")}</p>
        </div>
        <div
          className="col-md-4 sign-up-div"
          onClick={() => {
            console.log("In Sign Up Shit");
          }}
        >
          <p className="sign-up-button">{getLanguageConstant(lang, "CharityInstitution")} </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpBar;
