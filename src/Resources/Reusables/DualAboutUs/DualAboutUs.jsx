import "./DualAboutUs.css";
import { AboutUs } from '..';

function DualAboutUs({theAbouts}) {
  return (
    <div className="row">
      {
        theAbouts.map((theAbout) => {
           return <AboutUs title={theAbout.title} description={theAbout.description} dual={true} className="dual-about-us" icon={theAbout.icon}/>
        })
      }
    </div>
  );
}

export default DualAboutUs;
