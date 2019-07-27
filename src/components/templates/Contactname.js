import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contactdetails from './Contactdetails';

const Contactname = (props) => {
  const emptyContactlist = (<p> Still there are no contacts information </p>);
console.log(props);
const { contacts } = props;
  const contactinfo = (
    <div className="">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
           {contacts.map(
             contact => <Contactdetails contact={contact} key={contact._id}/>
           )}
        </tbody>
      </table>
    </div>
  );
    return (
      <div>
      {contacts.length=== 0 ? emptyContactlist:contactinfo}
      </div>
    );

}

Contactname.propTypes={
    contacts:PropTypes.array.isRequired
}
export default Contactname;
