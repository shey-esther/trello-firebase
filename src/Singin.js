import React, { Component } from 'react';
import { connect, Provider } from "redux-zero/react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { NavLink, HashRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

<main className="bodyfirst">
  <header>
    <div className="logo" />
  </header>
  <form>
    <input className="imptall" type="Email" placeholder="Email" required defaultValue="john@phoenix-trello.com" />
    <input className="imptall" type="password" placeholder="Password" required defaultValue={12345678} />
    <NavLink to={'/Board'}><button className="butontrans" type="submit">Sign in</button></NavLink>
  </form>
  <br />
  <NavLink to={'/singup'}>Create new account</NavLink>
</main>

class HeaderApp extends Component {
  render() {
    return (
      <header>
        <div className="logo" />
      </header>
    );
  }
}

class Singin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <main className="bodyfirst">
        <HeaderApp />
        <div className="containersign">
          <form className="demoForm">
            <div className="panel panel-default"></div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <div className='input-group'>
                <span className="input-group-addon"><i id="arrow" className="fa fa-user-o fa-2x" ></i></span>
                <input type="email" required className="form-control imptall" name="email"
                  placeholder="Email" value={this.state.email} onChange={this.handleUserInput} />
              </div>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <div className='input-group'>
                <span className="input-group-addon"><i className="fa fa-key fa-fw lock"></i></span>
                <input type="password" className="form-control imptall" name="password"
                  placeholder="Password" value={this.state.password} onChange={this.handleUserInput} />
              </div>
            </div>
            {
              this.state.formValid ? <NavLink to={"/board"} className="btn btn-lg butontrans">Sing in</NavLink>
                : <button type="submit" className="btn btn-lg butontrans" disabled={!this.state.formValid}>Sign in</button>
            }<br /><br />
            <NavLink to={"/singup"}>Create new account</NavLink>
          </form>
        </div>
      </main>
    )
  }
}
const mapToProps = ({ trello }) => ({ trello });
export default connect(mapToProps)(Singin);
