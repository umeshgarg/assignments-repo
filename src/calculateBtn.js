import React from "react";
// import proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

const btnStyle = {
  marginTop: "1rem",
  fontSize: "1em",
  padding: "0.7rem 1.7rem",
  fontWeight: "500",
  textAlign: "center",
  textTransform: "uppercase",
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "3px solid #00d7c3",
  borderRadius: "50px",
  transition: "all .15s ease-in-out",
  color: "00d7c3",
  textColor: "red",
};

function CalculateButton(props) {
  let navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        style={btnStyle}
        onClick={() => {
          navigate(props.navigation);
        }}
      >
        {props.btnText}
      </button>
    </>
  );
}

export default CalculateButton;

CalculateButton.defaultProps = {
  btnText: "calculate",
};
