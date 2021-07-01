import { atom } from "recoil";

export const websiteDirectionState = atom({
  key: "websiteDirectionState", // unique ID (with respect to other atoms/selectors)
  default: "ltr", // default value (aka initial value)
});

export const websiteLanguageState = atom({
    key: "websiteLanguageState", // unique ID (with respect to other atoms/selectors)
    default: "en", // default value (aka initial value)
  });
  