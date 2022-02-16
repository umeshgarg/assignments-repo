// import { fontWeight } from "@mui/system";
import React from "react";
// import CalculateButton from "./calculateBtn";
import SlidersComponent from "./slidersComponent";
import { useState } from "react";
import {Bar} from 'react-chartjs-2';

function Graph(props) {
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
  const [isGraph, setIsGraph] = useState(true);
  const [graphData, setGraphData] = useState({});
  const [shownData, setShownData] = useState({
    labels: ['Red', 'Orange', 'Blue'],
    datasets: [
      {
        label: "SIP Delay Projections",
        data: [5,10,15],
        backgroundColor: ["#e58cdb", "#c9fdd7", "#ff0000"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // change state function
  function changeState() {
    // if(isGraph===true){
    //   setGraphData(props.graphData);
    // }
    setIsGraph(false);
  }

  return (
    <>
      {isGraph === true && (
        <div
          className="container"
          style={{
            border: "1px solid black",
            padding: "5rem",
            backgroundColor: "#fafafa",
          }}
        >

          <div
            className="result-container"
            style={{
              marginTop: "2rem",
              border: "1px solid black",
              padding: "1rem",
              backgroundColor: "white",
            }}
          >
            <header
              style={{
                //   border: "1px solid black",
                padding: "1rem",
                backgroundColor: "#bef2ff",
                margin: " -1rem ",
                marginBottom: "1.8rem",
              }}
            >
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "1.8rem",
                  fontWeight: "680",
                  color: "#0092ca",
                }}
              >
                Result
              </span>
            </header>
            <div className="result-text">
              <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                Delay of{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    fontWeight: "680",
                    color: "#dc2f2f",
                  }}
                >
                  {props.delayMonths}
                </span>{" "}
                in starting your SIP will cause a notational Loss of : Rs
                <span
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    fontWeight: "680",
                    color: "#dc2f2f",
                  }}
                >
                  {props.lossFromDelay}
                </span>{" "}
                in the final value of your investment.
              </p>
            </div>
            <footer>
              <p style={{ fontSize: "0.7rem", fontWeight: "500" }}>
                <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {" "}
                  Note :
                </span>{" "}
                <span style={{ color: "#dc2f2f", fontSize: "1.2rem" }}>
                  *
                </span>{" "}
                Based on monthly compounding.
              </p>
            </footer>
          </div>

          {/* recalculate button calling button component */}
          <button type="button" style={btnStyle} onClick={changeState}>
            re-calculate
          </button>
        </div>
      )}
      {isGraph === false && (
        <div>
          <SlidersComponent />
        </div>
      )}
    </>
  );
}

export default Graph;
