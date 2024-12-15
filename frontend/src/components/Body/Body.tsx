import "./Body.css";
import { Routes, Route } from "react-router-dom";
import MainUtility from "./MainUtility/MainUtility";

function Body() {
  return (
    <>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<MainUtility />} />
        </Routes>
      </div>
    </>
  );
}
export default Body;
