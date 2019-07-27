import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Contactname  from './Contactname';
import {fetchContact} from '../redux/actions/actioncrud';

class Contactlist extends Component {

  componentDidMount(){
    this.props.fetchContact();
  }
  render() {
    const {contacts} = this.props;
    return (
      <div className="container-fluid">
       <h2>Contactlist</h2>
       <Contactname contacts={contacts} />
      </div>
    );
  }

}


Contactlist.propTypes={
  contacts:PropTypes.array.isRequired,
  fetchContact:PropTypes.func.isRequired
}

const mapStateToProps = state=>{
  console.log(state);
  return {
    contacts: state.contactlist.contacts
  }
};

export default connect(mapStateToProps,{fetchContact})(Contactlist);
