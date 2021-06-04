import React,{Component} from 'react';
import IndexPage from './pages/HomePage/IndexPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App"> 
            <Header/>
            <Switch>
              <Route exact path="/">
                <IndexPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route> 
              <Route path='/contact'>
                <ContactPage />
              </Route>
            </Switch>
            <Footer/>
        </div>

       
      </Router>
        
    );
  }
  
}

export default App;
