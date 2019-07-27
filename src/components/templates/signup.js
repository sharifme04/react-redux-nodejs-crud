import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
       <form  onSubmit={this.props.handleSubmit}>
           <div className="form-group">
              <label>FullName	:</label>
              <input
              value={this.props.name}
              onChange={this.props.handleChange}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"/>
            </div>
          <div className="form-group">
              <label>Email :</label>
              <input
              value={this.props.email}
              onChange={this.props.handleChange}
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"/>
          </div>
          <div className="form-group">
              <label >Phone	:</label>
              <input
              value={this.props.phone}
              onChange={this.props.handleChange}
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter phone"/>
           </div>
           <div className="form-group">
              <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
           </div>

        </form>
        </div>
    );
  }

}

Signup.contextTypes ={
  router:PropTypes.object.isRequired
}

export default withRouter(Signup);
