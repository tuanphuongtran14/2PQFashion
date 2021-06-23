import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import $ from "jquery";
import {
    Link,
    NavLink,
  } from "react-router-dom";

class Header extends Component {
componentDidMount() {
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });
    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });
}
onClick=(event)=>{
    event.preventDefault();
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });
    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });
}
countPrice=(cart)=>{
    var result=0;
    cart.forEach(item=>{
        result+=item.price*item.quantity;
    })
    return result;
}
  render(){
    return (
        <Fragment>
                {/* <!-- Header Section Begin --> */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <a href="/login">Sign in</a>
                                        <a href="/">FAQs</a>
                                    </div>
                                    <div className="header__top__hover">
                                        <span>Usd <i className="arrow_carrot-down"></i></span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link to="/"><img src="/img/logo.png" alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li ><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                                    <li><Link to={`/shop`}>Shop </Link></li>
                                    <li><a href="/">Pages</a>
                                        <ul className="dropdown">
                                            <li>
                                                <Link exact="true" to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li><a href="./shop-details.html">Shop Details</a></li>
                                            <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><NavLink exact to='/about' activeClassName="active">Blog</NavLink></li>
                                    <li>
                                        <NavLink exact to="/contact" activeClassName="active">
                                            Contacts
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">     
                                <Link to={''} onClick={this.onClick} className="search-switch"><img src="/img/icon/search.png" alt=""/></Link>
                                <Link type="button" to={`/`}><img src="/img/icon/heart.png" alt=""/></Link>
                                <Link type="button" to={`/shop/cart`}><img src="/img/icon/cart.png" alt=""/> <span>0</span></Link>
                                <div className="price">${this.countPrice(this.props.cart)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </header>

        </Fragment>
        
    );
  }
  
}

const mapStateToProps = (state)=>{
    return{
        cart:state.cart,
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return{
         
    }
  }
  export default connect (mapStateToProps,mapDispatchToProps)(Header);
