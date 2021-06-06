import React,{Component} from 'react';
<<<<<<< HEAD
import ShopPage from './pages/ShopPage/ShopPage';

=======
import IndexPage from './pages/HomePage/IndexPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdminPage from './pages/Admin/AdminPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";
import Footer from './components/Footer';
import Header from './components/Header';
>>>>>>> 21a876fd809333f1e0601e695787e95f4c02ed9f

class App extends Component {
  
  render(){
  if(this.props.location.pathname.indexOf('/admin') != 0)
    return (
<<<<<<< HEAD
        <div className="App">
            <ShopPage />
            
=======
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
              <Route path='/admin'>
                <AdminPage />
              </Route>
            </Switch>
            <Footer/>
>>>>>>> 21a876fd809333f1e0601e695787e95f4c02ed9f
        </div>
      </Router>
    );
  else 
      return (
        <Router>
          <div className="App">
            <Switch>
                <Route path='/admin'>
                  <AdminPage />
                </Route>
            </Switch>
          </div>
        </Router>
      );
  }
  
}

export default withRouter(App);
