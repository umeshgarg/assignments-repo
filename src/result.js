import React from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  // console.log(route);
  // console.log(navigation);
  let navigate = useNavigate();
  const RecalculateButton = () => (
  <button
      type='button'
      onClick={() => { navigate("/sipDelayCal") }}
    >
      Re-Calculate
    </button>
  );

  let duration = 6;
  let amount = 53170;

  return (
    <>
    <div className="back-btn">
          <a href="/" style={{ textDecoration: "none", color: "#333333" }}>
            <i class="bi bi-arrow-left-circle" style={{ fontSize: "3rem" }}></i>
            <span
              style={{
                fontSize: "1.0rem",
                marginLeft: "0.2rem",
                color: "#333333",
              }}
            >
              ← Back
            </span>
          </a>
        </div>
      <h3>Result</h3>
      <div>
        <p>Delay of {duration} months in starting your SIP will cause a notional loss of: Rs. {amount} in the final value of your Investment.</p>
      </div>
      
            <RecalculateButton/>
    </>
  );
}

export default Result;