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
            <p style={{color: 'grey', marginTop: '-3%'}}>{getLanguageConstant(lang, 'ContactUs')}</p>
            <p style={{fontSize: 'xx-large', fontWeight:""}}>{getLanguageConstant(lang, 'ReleaseDate')}</p>
        </div>
    );
}

export default ComingSoon; 