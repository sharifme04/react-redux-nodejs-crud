import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signup from './signup';
import { editContact, updateContact } from '../redux/actions/actioncrud';

class EditPage extends Component {
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
componentDidMount(){
  const {contact, match} = this.props;
  console.log(match.params._id);
  this.props.editContact(match.params._id);
  if (contact) {
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }
}
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.updateContact(this.props.match.params._id, userData);
    this.props.history.push('/contactlist');
    this.setState({
              name: '',
              email: '',
              phone: ''
          });
  }

  render() {
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

EditPage.propTypes = {
  editContact:PropTypes.func.isRequired,
    updateContact:PropTypes.func.isRequired
}

const mapStateToProps = state=>{
//  console.log(state.contactlist.contact);
  return {
    contact: state.contactlist.contact
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    editContact: (value)=> dispatch(editContact(value)),
    updateContact: (value1, value2)=> dispatch(updateContact(value1, value2))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage) ;
