import { arabicPhrases, englishPhrases } from "./Phrases";
import { arabicConstants, englishConstants } from "./Constants";
export let getLanguagePhrase = (language, phrase) => {
  if (language === "ar") {
    return arabicPhrases[phrase];
  } else if (language === "en") {
    return englishPhrases[phrase];
  }
};

export let getLanguageConstant = (language, phrase) => {
  if (language === "ar") {
    return arabicConstants[phrase];
  } else if (language === "en") {
    return englishConstants[phrase];
  }
};
