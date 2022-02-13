// src
//  | 
//  |- sip_cal
//  |- sip_delay_cal
//  |- sip_stepup_cal
//  |- result
//  |- navigation

import React from "react";
import SipCal from "./sip_cal";
import SipDelayCal from "./sip_delay_cal";
import SipStepupCal from "./sip_stepup_cal";
import Result from "./result";
import Navigation from "./navigation";
import{ Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Sip extends React.Component{
 
    render() {
    return(
        <div>
            <div className="Sip">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigation/>} />
                    <Route path="/sipCal" element={<SipCal/>} />
                    <Route path="/sipDelayCal" element={<SipDelayCal/>} />
                    <Route path="/sipStepupCal" element={<SipStepupCal/>} />
                    <Route path="/result" element={<Result/>} />
                </Routes>
            </Router>
            </div>
        </div>
            
        ) 
    };
}
export default Sip;