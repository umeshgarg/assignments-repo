import React from "react";
import proptypes from "prop-types";

function BackButton(props) {
  const textStyle = {
    fontSize: "2rem",
    fontWeight: "500",
    letterSpacing: "0",
    lineHeight: "1rem",
    Color: "#333333",
    // color: "#606470",
  };
  return (
    <>
      <div className="outer-container " style={{ padding: "1rem 2rem" }}>
        <h1 style={textStyle}>SIP DELAY CALCULATOR</h1>
        <div className="back-btn">
          <a href="/" style={{ textDecoration: "none", color: "#333333" }}>
            <i class="bi bi-arrow-left-circle" style={{ fontSize: "3rem" }}></i>
            <span
              style={{
                fontSize: "1.8rem",
                color: "#333333",
              }}
            >
              Back
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default BackButton;

// default props
BackButton.propTypes = {
  headingText: proptypes.string,
};
