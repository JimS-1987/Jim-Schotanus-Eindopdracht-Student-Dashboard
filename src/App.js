import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Student from './components/StudentView';
import Dashboard from './components/Dashboard';

const App = () => {
  console.log('start App');
  return (
    <div className="container">
      <Router>
        
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <Nav />
        </div>
        
        <div className="main">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            path="/Home"
            render={(props) => (<Dashboard {...props} name={''} />)}
          />
          <Route
            path="/Evelyn"
            render={(props) => (<Student {...props} name={'Evelyn'} />)}
          />
          <Route
            path="/Aranka"
            render={(props) => (<Student {...props} name={'Aranka'} />)}
          />
          <Route
            path="/Floris"
            render={(props) => (<Student {...props} name={'Floris'} />)}
          />
          <Route
            path="/Hector"
            render={(props) => (<Student {...props} name={'Hector'} />)}
          />
          <Route
            path="/Martina"
            render={(props) => (<Student {...props} name={'Martina'} />)}
          />
          <Route
            path="/Maurits"
            render={(props) => (<Student {...props} name={'Maurits'} />)}
          />
          <Route
            path="/Rahima"
            render={(props) => (<Student {...props} name={'Rahima'} />)}
          />
          <Route
            path="/Sandra"
            render={(props) => (<Student {...props} name={'Sandra'} />)}
          />
          <Route
            path="/Wietske"
            render={(props) => (<Student {...props} name={'Wietske'} />)}
          />
          <Route
            path="/Storm"
            render={(props) => (<Student {...props} name={'Storm'} />)}
          />
        </div>
      </Router>
    </div>


  );
};
export default App;