import React, { Component } from 'react';
import IndexPage from './pages/HomePage/IndexPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopPage from './pages/ShopPage/ShopPage';
import CartPage from './pages/PaymentPage/CartPage';
import AdminPage from './pages/AdminPage/MainPage';
import Test from './pages/AdminPage/test';
import CheckoutPage from './pages/PaymentPage/CheckoutPage';
import UserPage from './pages/UserPage/UserPage';
import LoginPage from './pages/LoginRegisterPage/LoginPage'
import RegisterPage from './pages/LoginRegisterPage/RegisterPage'
import ShopDetailsPage from './pages/ShopDetailsPage/ShopDetailsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import $ from 'jquery';
// import routes from './routes'

class App extends Component {
  componentDidMount() {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  }

  render() {
    return (
      <Router>
          <div className="App">
            <Route path={/^((?!\/admin).)*$/} component={Header} />
            <Switch>
              <Route exact path="/" >
                <IndexPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/shop/cart">
                <CartPage />
              </Route>
              <Route path="/shop" exact>
                <ShopPage />
              </Route>
              <Route path="/shop/:filter" match="match" >
                <ShopPage />
              </Route>
              <Route path="/payment" match="match" component={({ match, history }) => <CheckoutPage match={match} history={history} />} />
              <Route path='/contact'>
                <ContactPage />
              </Route>
              <Route path='/user' component={({ match, history }) => <UserPage match={match} history={history} />}>
              </Route>
              <Route path='/admin'>
                <AdminPage />
              </Route>
              <Route path='/login'>
                <LoginPage />
              </Route>
              <Route path='/register'>
                <RegisterPage />
              </Route>
              <Route path='/admin'>
                <AdminPage />
              </Route>
              <Route path='/info'>
                <ShopDetailsPage />
              </Route>
              <Route path='/test'>
                <Test />
              </Route>
            </Switch>
            <Route path={/^((?!\/admin).)*$/} component={Footer} />
          </div>
        </Router>
    )
    // if (this.props.location.pathname.indexOf('/admin') !== 0)
    //   return (
    //     <Router>
    //       <div className="App">
    //         <Header />
    //         <Switch>
    //           <Route exact path="/" >
    //             <IndexPage />
    //           </Route>
    //           <Route path="/about">
    //             <AboutPage />
    //           </Route>
    //           <Route path="/shop/cart">
    //             <CartPage />
    //           </Route>
    //           <Route path="/shop" exact>
    //             <ShopPage />
    //           </Route>
    //           <Route path="/shop/:filter" match="match" >
    //             <ShopPage />
    //           </Route>
    //           <Route path="/payment" match="match" component={({ match, history }) => <CheckoutPage match={match} history={history} />} />
    //           <Route path='/contact'>
    //             <ContactPage />
    //           </Route>
    //           <Route path='/user'>
    //             <UserPage />
    //           </Route>
    //           <Route path='/admin'>
    //             <AdminPage />
    //           </Route>
    //           <Route path='/login'>
    //             <LoginPage />
    //           </Route>
    //           <Route path='/register'>
    //             <RegisterPage />
    //           </Route>
    //         </Switch>
    //         <Footer />
    //       </div>
    //     </Router>
    //   );
    // else
    //   return (
    //     <Router>
    //       <div className="App">
    //         <Switch>
    //           <Route path='/admin'>
    //             <AdminPage />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </Router>
    //   );
  }

}

export default withRouter(App);
