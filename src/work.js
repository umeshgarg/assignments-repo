import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import "./work.css";

const body = {     
    background: '#202124',
}
class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            designation: "",
            age: "",
            address: "",
            rows: [],
        };
    }
    
    handleSubmit(e){
        let data = {
            'id':this.state.id,
            'name':this.state.name,
            'designation':this.state.designation,
            'age':this.state.age,
            'address':this.state.address,
        };
        let newRows = this.state.rows;
        newRows.push(data);
        this.setState({
            id: '',
            name: '',
            designation: '',
            age: '',
            address: '',
            rows: newRows,
        });
    };
    
    handleChange(e,fldid) {
            let data = e.target.value;
            switch (fldid) {
                case "id":
                    this.setState({
                        id: data
                    });
                    break;
                case "name":
                    this.setState({
                        name: data
                    });
                    break;
                case "designation":
                        this.setState({
                            designation: data
                        });
                        break;
                case "age":
                    this.setState({
                        age: data
                    });
                    break;
                case "address":
                        this.setState({
                            address: data
                        });
                        break;
                        default:    
            }
        }

        render() {
            return (
            <div style={body}>
                <h3 align='center'> 
                    Hi, My id is {this.state.id}. My name is {this.state.name} and I am working here as a {" "}
                    {this.state.designation}. I am {this.state.age} years old and I live in {this.state.address}.
                </h3>
                <br />
                <br />
                <div align='center'>
                <label><b>ID</b></label>
                <br />
                <input
                    id='id'
                    type="text"
                    value={this.state.id}
                    onChange={(e) => this.handleChange(e,"id")}
                />
                <br />
                <br />
                <label><b>Name</b></label>
                <br />
                <input
                    id='name'
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e,"name")}
                />
                <br />
                <br />
                <label><b>Designation</b></label>
                <br />
                <input
                    id='designation'
                    type="text"
                    value={this.state.designation}
                    onChange={(e) => this.handleChange(e,"designation")}
                />
                <br />
                <br />
                <label><b>Age</b></label>
                <br />
                <input
                    id='age'
                    type="number"
                    value={this.state.age}
                    onChange={(e) => this.handleChange(e,"age")}
                />
                <br />
                <br />
                <label><b>Address</b></label>
                <br />
                <input
                    id='address'
                    type="text"
                    value={this.state.address}
                    onChange={(e) => this.handleChange(e,"address")}
                />
                <br />
                <br />
                <button onClick={(e) =>this.handleSubmit(e)}>Submit</button>
                </div>
                <br />
                <br />
                <div>
                
                <table align='center' border='1' cellSpacing='2' cellPadding='5' id="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rows.map((val, key) => {
                                return (
                                    <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.designation}</td>
                                    <td>{val.age}</td>
                                    <td>{val.address}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                </div>
                </div>
            
        );
    }
}
export default Work;