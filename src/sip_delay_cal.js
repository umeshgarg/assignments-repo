import React from "react";
import BackButton from "./backButton";
import SlidersComponent from "./slidersComponent";
// import Graph from "./graph";
// import useState from "react";
// state

function SipDelayCal() {
  // const sliderPage = false;

  // changeState();
  return (
    <>
      {/* back button component */}
      <div className="back-btn">
        <BackButton />
      </div>

      {/* call slider component */}

      {/* {sliderPage === true && ( */}
      <div className="sliders" style={{ margin: "2rem" }}>
        <SlidersComponent />
      </div>
      {/* )}  */}
      {/* call resut component to render */}
      {/* 
      <div className="resutPage" style={{ margin: "2rem" }}>
        <Graph />
      </div> */}
    </>
  );
}

export default SipDelayCal;