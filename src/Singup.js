import React, { Component } from 'react';
import { connect, Provider } from "redux-zero/react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo" />
      </header>
    );
  }
}
class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      formErrors: { name: '', lastname: '', email: '', password: '' },
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
    let nameValid = this.setState.nameValid;
    let lastValid = this.setState.lastValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.match('');
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;

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
      nameValid: nameValid,
      emailValid: emailValid,
      passwordValid: passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <main className="bodyfirst">
        <Header />
        <div className="container">
          <form >
            <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
              <div className='input-group'>
                <input type="name" required className="form-control imptall" name="name"
                  placeholder="Name" value={this.state.name} onChange={this.handleUserInput} />
              </div>
            </div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.lastname)}`}>
              <div className='input-group'>
                <input type="lastname" required className="form-control imptall" name="lastname"
                  placeholder="Lastname" value={this.state.lastname} onChange={this.handleUserInput} />
              </div>
            </div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <div className='input-group'>
                <input type="email" required className="form-control imptall" name="email"
                  placeholder="Email" value={this.state.email} onChange={this.handleUserInput} />
              </div>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <div className='input-group'>
                <input type="password" className="form-control imptall" name="password"
                  placeholder="Password" value={this.state.password} onChange={this.handleUserInput} />
              </div>
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <div className='input-group'>
                <input type="password" className="form-control imptall" name="password"
                  placeholder="Confirm password" value={this.state.password} onChange={this.handleUserInput} />
              </div>
            </div>
            {
              this.state.formValid ? <NavLink to={"/board"} className="btn btn-lg butontrans">Sing Up</NavLink>
                : <button type="submit" className="btn btn-lg butontrans" disabled={!this.state.formValid}>Sing Up</button>
            }<br /><br />
            <NavLink to={"/singin"} >Sing in</NavLink>
          </form>
        </div>
      </main>
    )
  }
}

const mapToProps = ({ trello }) => ({ trello });
export default connect(mapToProps)(Singup);