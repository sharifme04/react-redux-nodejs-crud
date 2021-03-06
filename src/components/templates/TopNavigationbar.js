import React from 'react';
import {Link} from 'react-router-dom'

export default class TopNavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
  	   <div className="container-fluid">
  	   	 <div className="navbar-header">
  	   	 	 <Link to="/" className="navbar-brand">Home/Logo</Link>
  	   	 </div>
  	   	  <div className="collapse navbar-collapse">
  	   	  	<ul className="nav navbar-nav navbar-right">
              <li><Link to="/contactlist">Contact list</Link></li>
    	   	  	<li><Link to="/signup">Add Contact</Link></li>
  	   	  	</ul>
  	   	  </div>
  	   </div>
      </nav>

    );
  }

}
