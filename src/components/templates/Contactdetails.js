import React from 'react';
import PropTypes from 'prop-types';
import {deleteContact} from '../redux/actions/actioncrud';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

function Contactdetails(props) {
  return(
      <tr>
        <td>{props.contact.name}</td>
        <td>{props.contact.email}</td>
        <td>{props.contact.phone}</td>
        <td><Link to={`/api/contactlist/edit/${props.contact._id}`}><button type="button" className="btn btn-info">Edit</button></Link></td>
        <td><button type="button" className="btn btn-danger" onClick={()=> props.deleteContact(props.contact._id)}>Delete</button></td>
      </tr>
  )
};

Contactdetails.propTypes ={
  contact: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch)=>{
return {
  deleteContact:  (_id) => dispatch(deleteContact(_id)),
 }
}

export default connect(null, mapDispatchToProps)(Contactdetails);
