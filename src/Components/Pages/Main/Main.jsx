import React from "react";
import { Footer } from "../../Layout";
import { TextButton } from "../../Reusables";
import backgroundDot from '../../../assets/salam_background_edited1.png';
import logo from '../../../assets/SLogo1.png';
import './Main.css';
const Main = () => (
    <div className="App" style={{ backgroundImage:`url(${backgroundDot})`, height: "100vh", backgroundSize: "50px"}}>
      <header className="App-header">
        <img src={logo} width={350}></img>
        <h3 className="release-date">10.11.2021</h3>
        <br />
        <p className="sub-text">
          Contact us at m@salameg.org
        </p>
      </header>
      <TextButton />
      <Footer></Footer>

    </div>
);

export default Main;