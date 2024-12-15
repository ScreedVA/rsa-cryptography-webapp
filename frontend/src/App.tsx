import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <div id="header"></div>
          <div id="body">
            <Body />
          </div>
          <div id="footer"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
