import "./App.css";
import { Main, About, SignUp } from "./Resources/Pages";
import { Footer, Header } from "./Resources/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header className="header"></Header>
      <Router className="body">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
      <Footer className="footer"></Footer>
    </RecoilRoot>
  );
}

export default App;
