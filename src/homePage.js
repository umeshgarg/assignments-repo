import React from "react";
import finance from "./finance.png";
import stepup from "./stepup.png";
import sipdelay from "./sipdelay.png";
import "./homepage.css";

function HomePage() {
  // image styles

  let homePageStyle = {
    // border: "1px solid black",
    margin: "7rem",
    marginLeft: "9rem",
  };

  return (
    <>
      <div className="wrap">
        <div className="home-page" style={homePageStyle}>
          <div className="horizontal-grouping">
            <div className="card-1">
              <div className="card-image">
                <img src={finance} alt="financeImage" />
              </div>
              <div className="card-info">
                <div className="card-name">
                  <h2>SIP Calculator</h2>
                </div>
                <div className="card-desc">
                  Future projection of SIP amount with given expected return %
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="card-2">
              <div className="card-image">
                <img src={finance} alt="financeImage" />
              </div>
              <div className="card-info">
                <div className="card-name">
                  <h2>STP Calculator</h2>
                </div>
                <div className="card-desc">
                  <p>
                    Back-tested STP Calculation with PDF export to be presented
                    to client
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="horizontal-grouping">
            <div className="card-3">
              <div className="card-image">
                <img src={finance} alt="financeImage" />
              </div>
              <div className="card-info">
                <div className="card-name">
                  <h2>SWP Calculator</h2>
                </div>
                <div className="card-desc">
                  <p>
                    Back-tested SWP Calculation with PDF export to be presented
                    to client
                  </p>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="card-4">
              <div className="card-image">
                <img id="small-image-1" src={sipdelay} alt="sipdelayImage" />
              </div>
              <div className="card-info">
                <div className="card-name">
                  <h2>SIP Delay Calculator</h2>
                </div>
                <div className="card-desc">
                  <p>Future projection if SIP instalment is delayed</p>
                </div>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div className="card-5" style={{ margin: "1.5rem 0rem" }}>
            <div className="card-image">
              <img id="small-image-2" src={stepup} alt="financeImage" />
            </div>
            <div className="card-info">
              <div className="card-name">
                <h2>SIP Step-Up Calculator</h2>
              </div>
              <div className="card-desc">
                <p>
                  Future projection of SIP with yearly increment in yearly
                  amount
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
