import React from "react";
import "./LanguageButton.css";
import { useRecoilState } from "recoil";
import { websiteDirectionState, websiteLanguageState } from '../../../RecoilResources/Atoms';
let TextButton = function () {
  const [direction, setWebsiteDirectionState] = useRecoilState(
    websiteDirectionState
  );

  const [language, setWebsiteLanguageState] = useRecoilState(
    websiteLanguageState
  );

  const changeWebsiteDirection = () => {
    if (direction === "ltr") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      setWebsiteDirectionState("rtl");
      setWebsiteLanguageState("ar");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      setWebsiteDirectionState("ltr");
      setWebsiteLanguageState("en");
    }
  };

  return (
    <div className="language" onClick={changeWebsiteDirection}>
      <p className="lang-button">{language === "ar" ? "عربي" : "English"}</p>
    </div>
  );
};

export default TextButton;
