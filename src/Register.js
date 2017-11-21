import React, { Component } from 'react';
import {NavLink,  Redirect } from 'react-router-dom';

import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from './actions'
import './App.css';

const Register = ({successLogin}) => {
      return (
         <div>
            {
               successLogin  && <Redirect to = "/home" />
            }
            <form onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp (this.fullNameRef.value, this.emailRef.value, this.passwordRef.value, this.surveyRef.value, this.questionRef.value, this.optionsRef.value) 
               }
            }>
              <input placeholder = "FullName" ref = {e => this.fullNameRef = e} />
              <input placeholder = "Email" ref = {e => this.emailRef = e}/>
              <input type="password" placeholder = "Password" ref = {e => this.passwordRef = e}/>
              <input placeholder = "Survey title" ref = {e => this.surveyRef = e} />
              <input placeholder = "Question title" ref = {e => this.questionRef = e} />
              <input placeholder = "Options [array]" ref = {e => this.optionsRef = e} />
             
              <button type="submit">
                 Sign Up!
              </button>
            </form>
         </div>
      );
   }


   const mapToProps = ({successLogin})  => ({successLogin}) 
   export default connect(mapToProps)(Register) ;