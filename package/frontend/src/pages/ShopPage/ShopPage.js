import React,{Component,Fragment} from 'react';
import SearchContainer from '../../containers/SearchContainer';
import FilterNameContainer from '../../containers/FilterNameContainer';
import SortContainer from '../../containers/SortContainer';
import ShopContainer from '../../containers/ShopContainer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import * as actions from '../../actions/index'
class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            page:0,
        }
        ;
    }

    componentDidMount(){
        this.props.fetchProductsRequest();
        this.props.getDataPage(this.state.page);
    }
    
    render(){
        return (
            <Fragment>
                <Header/>
                {/* <!-- Breadcrumb Section Begin --> */}
                <section className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__text">
                                    <h4>Shop</h4>
                                    <div className="breadcrumb__links">
                                        <a href="./index.html">Home</a>
                                        <span>Shop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}

                {/* <!-- Shop Section Begin --> */}
                <section className="shop spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="shop__sidebar">
                                    <div className="shop__sidebar__search">
                                        < FilterNameContainer />
                                    </div>
                                    <div className="shop__sidebar__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                                </div>
                                                <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="shop__sidebar__categories">
                                                            <ul className="nice-scroll">
                                                                <li><a href="#">Men (20)</a></li>
                                                                <li><a href="#">Women (20)</a></li>
                                                                <li><a href="#">Bags (20)</a></li>
                                                                <li><a href="#">Clothing (20)</a></li>
                                                                <li><a href="#">Shoes (20)</a></li>
                                                                <li><a href="#">Accessories (20)</a></li>
                                                                <li><a href="#">Kids (20)</a></li>
                                                                <li><a href="#">Kids (20)</a></li>
                                                                <li><a href="#">Kids (20)</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                                </div>
                                                <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="shop__sidebar__brand">
                                                            <ul>
                                                                <li><a href="#">Louis Vuitton</a></li>
                                                                <li><a href="#">Chanel</a></li>
                                                                <li><a href="#">Hermes</a></li>
                                                                <li><a href="#">Gucci</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                                </div>
                                                <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="shop__sidebar__price">
                                                            <ul>
                                                                <li><a href="#">$0.00 - $50.00</a></li>
                                                                <li><a href="#">$50.00 - $100.00</a></li>
                                                                <li><a href="#">$100.00 - $150.00</a></li>
                                                                <li><a href="#">$150.00 - $200.00</a></li>
                                                                <li><a href="#">$200.00 - $250.00</a></li>
                                                                <li><a href="#">250.00+</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                                </div>
                                                <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="shop__sidebar__size">
                                                            <label >xs
                                                                <input type="radio" id="xs"/>
                                                            </label>
                                                            <label >s
                                                                <input type="radio" id="sm"/>
                                                            </label>
                                                            <label >m
                                                                <input type="radio" id="md"/>
                                                            </label>
                                                            <label >xl
                                                                <input type="radio" id="xl"/>
                                                            </label>
                                                            <label >2xl
                                                                <input type="radio" id="2xl"/>
                                                            </label>
                                                            <label >xxl
                                                                <input type="radio" id="xxl"/>
                                                            </label>
                                                            <label>3xl
                                                                <input type="radio" id="3xl"/>
                                                            </label>
                                                            <label >4xl
                                                                <input type="radio" id="4xl"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                                </div>
                                                <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="shop__sidebar__color">
                                                            <label className="c-1" >
                                                                <input type="radio" id="sp-1"/>
                                                            </label>
                                                            <label className="c-2" >
                                                                <input type="radio" id="sp-2"/>
                                                            </label>
                                                            <label className="c-3" >
                                                                <input type="radio" id="sp-3"/>
                                                            </label>
                                                            <label className="c-4" >
                                                                <input type="radio" id="sp-4"/>
                                                            </label>
                                                            <label className="c-5" >
                                                                <input type="radio" id="sp-5"/>
                                                            </label>
                                                            <label className="c-6" >
                                                                <input type="radio" id="sp-6"/>
                                                            </label>
                                                            <label className="c-7">
                                                                <input type="radio" id="sp-7"/>
                                                            </label>
                                                            <label className="c-8" >
                                                                <input type="radio" id="sp-8"/>
                                                            </label>
                                                            <label className="c-9" >
                                                                <input type="radio" id="sp-9"/>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                                </div>
                                                <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <div className="shop__sidebar__tags">
                                                            <a href="#">Product</a>
                                                            <a href="#">Bags</a>
                                                            <a href="#">Shoes</a>
                                                            <a href="#">Fashio</a>
                                                            <a href="#">Clothing</a>
                                                            <a href="#">Hats</a>
                                                            <a href="#">Accessories</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="shop__product__option">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="shop__product__option__left">
                                                <p>Showing 1–12 of 126 results</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <SortContainer />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    < ShopContainer />
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product__pagination">
                                            <a className="active" href="#">1</a>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <span>...</span>
                                            <a href="#">21</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Shop Section End --></div> */}
                <Footer/>
                <SearchContainer />
            </Fragment>
        );
    }
  
}
const mapStateToProps=(state)=>{
    return {
        products:state.products,
        page:state.page
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchProductsRequest:()=>{
            dispatch(actions.fetchProductsRequest());
        },
        getDataPage:(data)=>{
            dispatch(actions.getDataPage(data));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
