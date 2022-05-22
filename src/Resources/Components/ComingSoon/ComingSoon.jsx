//import recoil stuff
import { useRecoilState } from "recoil";
import { websiteLanguageState } from "../../../RecoilResources/Atoms";

//Import images
import logo from "../../../Assets/SLogo1.png";

// Import Helpers
import { getLanguageConstant, getLanguagePhrase } from '../../../Utilities/Helpers';

function ComingSoon() {

    const [lang] = useRecoilState(websiteLanguageState);

    return(
        <div style={{
            display: 'flex', 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",}}
        >
            <img src={logo} width={450} alt="logo"/>
            <hr/>
            <p style={{fontSize: 'xx-large'}}>{getLanguagePhrase(lang, 'ReleasePhrase')}</p>
            <p style={{fontSize: 'xx-large'}}>{getLanguageConstant(lang, 'ReleaseDate')}</p>
        </div>
    );
}

export default ComingSoon; 