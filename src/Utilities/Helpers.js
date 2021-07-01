import { arabicPhrases, englishPhrases} from './Phrases';

export let getLanguagePhrase = (language, phrase) => {
    if(language === "ar"){
        return arabicPhrases[phrase];
    }
    else if(language === "en"){
        return englishPhrases[phrase];
    }
}