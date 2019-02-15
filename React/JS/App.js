import React, { Component } from "react"
import { relative } from "path";


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }
    render() {
        return (
            <main>
                <form>
                    <input style={{ position: "relative", bottom: "-100px" }}
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    <input style={{ position: "relative", bottom: "-100px" }}
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />

                    <input style={{ position: "relative", bottom: "-100px" }}
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />
                    <select style={{ position: "relative", right: "-1000px", bottom: "-200px" }}
                        value={this.state.action}
                        name="action"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Actions --</option>
                        <option value="get">GET</option>
                        <option value="put">PUT</option>
                        <option value="post">POST</option>
                    </select>

                    <br />

                    <select style={{ position: "relative", right: "-997px", top: "40px" }}>
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                        >
                        <option value="">--Role--</option>
                        <option value="purchaseManager">Purchase Manager</option>
                        <option value="seniorFinanceManager">Senior Finance Manager</option>
                        <option value="dataAnalyst">Data Analyst</option>
                        <option value="accountant">Accountant</option>
                    </select>

                    <button style={{ position: "relative", bottom: "-280px", left: "-175px" }}>Submit</button>

                    <input style={{ position: "relative", bottom: "-100px", width: "200px", height: "50px", left: "-235px" }}
                        name="resources"
                        value={this.state.resources}
                        onChange={this.handleChange}
                        placeholder="Resources" />

                    <br />
                    < textarea rows="4" cols="50" style={{ position: "relative", bottom: "-120px", width: "600px", height: "120px", right: "-1px" }}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Description" />
                    <br />

                </form>

                <hr style={{ position: "relative", bottom: "-170px" }} />

                <h2 style={{ position: "relative", bottom: "-180px" }}>Entered information:</h2>
                <p style={{ position: "relative", bottom: "-180px" }}>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p style={{ position: "relative", bottom: "-180px" }}>Your age: {this.state.age}</p>
                <p style={{ position: "relative", bottom: "-180px" }}>Action: {this.state.action}</p>
                <p style={{ position: "relative", bottom: "-180px" }}>Resources: {this.state.resources}</p>
                <p style={{ position: "relative", bottom: "-180px" }}>Description: {this.state.description}</p>



            </main>
        )
    }
}

export default App



