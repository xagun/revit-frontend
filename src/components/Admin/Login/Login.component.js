import Axios from "axios";
import React from "react";
import { Component } from "react";
import "./Login.component.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
      },
      error: "",
    };
  }


  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        `${BASE_URL}/auth/login`,
        this.state.data
      );
      if (response.data.token) {
        let admin = {
          isAdmin: true,
          adminToken: response.data.token,
        };
        localStorage.setItem("admin", JSON.stringify(admin));
        this.props.history.push(`/dashboard`);
        alert('Logged in successfully');

      }
    }
    catch (error) {
    
   }
  };



  render() {
    return (
      <>
       
        <div className="container login-container" id="container">
          <div className="form-container sign-up-container">
        
          </div>
          <div className="form-container sign-in-container">
            <form  onSubmit={this.handleSubmit}>
              <h1>Sign in</h1>
             
              <span>Use your account to login</span>
              <label htmlFor="username">Username: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="please enter your username"
                  name="username"
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="please enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
        
              <div className="overlay-panel overlay-right">
             <img src = "images/logo.png" alt = "No preview available" />
              
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Login;