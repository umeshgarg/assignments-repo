import React from "react";
import "./Assignment.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Nav from "./nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Assignment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:"Umesh",
            count : 0
        };
    }
increaseNumber(){
    this.setState({
        count: this.state.count+1
    });
    // console.log(this.props.lastName);
}
decreaseNumber(){
    this.setState({
        count: this.state.count-1
    });
}

render() {
    return(
        <div>
            <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
        </Router>
        </div>
        </div>
        ) 
    };
}
export default Assignment;