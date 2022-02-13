import React from "react"
import{ Link } from "react-router-dom";

function Navigation(){
    let homePageStyle = {
        // border: "1px solid black",
        position: "relative",
        left: "7rem",
        right: "5rem",
        top: "7rem",
        bottom: "5rem",
      };

    let linkStyle = {
        textDecoration: 'none',
        // margin: '20px',
        color: "Black",
    };

    return(
        <>
            <div className="wrap">
              <div className="home-page" style={homePageStyle}>

                {/* card 1 */}
                <div className="card-1">
                  {/* <span className="card-image">
                    <img src={finance} alt="financeImage" />
                  </span> */}
                  <div className="card-info">
                    <div className="card-name">
                      {/* <h2>SIP Calculator</h2> */}
                      <Link to="sipCal" style={linkStyle}>
                        <b>SIP Calculator</b>
                      </Link>
                    </div>
                    <div className="card-desc">
                      <p>Future projection of SIP amount with given expected return %</p>
                    </div>
                  </div>
                </div>
      
                {/* card 2 */}
                <div className="card-2">
                  {/* <span className="card-image">
                    <img src={finance} alt="financeImage" />
                  </span> */}
                  <div className="card-info">
                    <div className="card-name">
                    <Link to="stpCal" style={linkStyle}>
                        <b>STP Calculator</b>
                    </Link>
                    </div>
                    <div className="card-desc">
                      <p>
                        Back-tested STP Calculation with PDF export to be presented to
                        client
                      </p>
                    </div>
                  </div>
                </div>


                {/* card 3 */}
                <div className="card-3">
                  {/* <span className="card-image">
                    <img src={finance} alt="financeImage" />
                  </span> */}
                  <div className="card-info">
                    <div className="card-name">
                      <Link to="swpCal" style={linkStyle}>
                        <b>SWP Calculator</b>
                      </Link>
                    </div>
                    <div className="card-desc">
                      <p>
                        Back-tested SWP Calculation with PDF export to be presented to
                        client
                      </p>
                    </div>
                  </div>
                </div>


                {/* card 4 */}
                <div className="card-4">
                  {/* <span className="card-image">
                    <img src={sipdelay} alt="sipdelayImage" />
                  </span> */}
                  <div className="card-info">
                    <div className="card-name">
                      <Link to="sipDelayCal" style={linkStyle}>
                        <b>SIP Delay Calculator</b>
                      </Link>
                    </div>
                    <div className="card-desc">
                      <p>Future projection if SIP instalment is delayed</p>
                    </div>
                  </div>
                </div>


                {/* 5th */}
                <div className="card-5">
                  {/* <span className="card-image">
                    <img src={stepup} alt="financeImage" />
                  </span> */}
                  <div className="card-info">
                    <div className="card-name">
                      <Link to="sipStepupCal" style={linkStyle}>
                        <b>SIP Step-Up Calculator</b>
                      </Link>
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
export default Navigation;