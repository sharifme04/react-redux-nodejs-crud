import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './components/templates/home';
import SignupPage from './components/templates/signupPage';
import EditPage from './components/templates/editPage';
import Contactlist from './components/templates/contactlist';
import TopNavigationBar from './components/templates/TopNavigationbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
         <div className="container-fluid">
           <div>
              <TopNavigationBar/>
           </div>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/contactlist" component={Contactlist}/>
              <Route path="/signup" component={SignupPage}/>
              <Route path="/api/contactlist/edit/:_id" render={(props)=> (
                 <EditPage  {...props}/>
              )}/>
            </div>
         </div>
        </BrowserRouter>
    );
  }
}

export default App;
