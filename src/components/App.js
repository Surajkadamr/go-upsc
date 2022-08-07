import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Blogs from "./Blogs";
import "./index.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar1 from "./NavBar1";

function App() {
  return (
    <Router>
      <div className="bg-blue-100">
      <NavBar />
        <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path='/blogs' element={<Blogs/>} />
              <Route path="/testseries" element={<NavBar1 />} />
          </Routes>
          <NavBar1 />
      </div>
    </Router>
  );
}

export default App;
