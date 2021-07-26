import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupTwo.css'
import API from '../../utils/API'
import { Link } from 'react-router-dom';


class Form extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        this.setState({input:input});
        input["username"] = input.username;
        input["password"] =input.password;
        input["confirm_password"] =input.password;
        API.postUser({
          username: this.state.input.username,
          password: this.state.input.password
        })
        alert('Welcome to our table, ' +this.state.input.username+'! Click return to go back to the main page and login, or signup with more users!');

    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["username"]) {
        isValid = false;
        errors["name"] = "Please enter your username.";
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div className="Signup-Page">
        <h1 className="title">Pantry2Table</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="name">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Username" 
              id="username" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" className="btn btn-success" />
          <Link to="/" className="btn btn-success">Return</Link>
        </form>
      </div>
    );
  }
}
  
export default Form;