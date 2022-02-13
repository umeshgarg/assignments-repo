import React from "react";
import "./Assignment.css";

class Home extends React.Component{
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

        <h1 className="COUNT"> COUNT NUMBER</h1><br></br>
        <h2 style={{color:this.state.count % 2===0 ? "green":"red"}}>{this.state.count}</h2><br></br>
        
        <button className="btn1" onClick={()=> this.increaseNumber()}>Increase</button>
        <button className="btn2" onClick={()=> this.decreaseNumber()}>Decrease</button>
        {/* // <div> */}
            {/* <h1>My Name is {this.state.firstName} {this.props.lastName}</h1> */}
        {/* // </div> */}
        

        </div>
        ) 
    };
}
export default Home;