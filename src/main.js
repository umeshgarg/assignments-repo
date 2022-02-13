import React from "react";
import Nav from "./nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main(){
  return(
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/table" element={<Table />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Main;