import "./App.css";
import { Main } from "./Resources/Pages";
import { Footer, Header } from "./Resources/Layout";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header className="header"></Header>
      <Main  className="body"/>
      <Footer className="footer"></Footer>
    </RecoilRoot>
  );
}

export default App;
