import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signup from './signup';
import {addContact} from '../redux/actions/actioncrud';

class SignupPage extends Component {
  constructor(props){
    super(props);

    this.state = {
    name: '',
    email: '',
    phone: ''
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addContact(this.state)
      this.props.history.push('/contactlist');
  }


  render() {
    const { addContact} = this.props;

    return (
      <div>
          <Signup{...this.props} {...this.state} 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
           />
      </div>
    );
  }

}

SignupPage.propTypes = {
  addContact:PropTypes.func.isRequired
}

export default connect(null, {addContact})(SignupPage) ;
