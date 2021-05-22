import React,{Component,Fragment} from 'react';
import SearchContainer from '../../containers/SearchContainer';
import ProductListContainer from './../../containers/ProductListContainer';
import ProductItem from './../../components/ProductItem';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import {connect} from 'react-redux';
import * as actions from './../../actions/index'
class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            page:1,
        }
        ;
    }
    componentDidMount(){
        this.props.fetchProductsRequest();
        this.props.getDataPage(1);
    }
    
    render(){
        return (
            <Fragment>
                <Header/>
                <section className="hero">
                    <div className="hero__slider owl-carousel">
                        <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <div className="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Fall - Winter Collections 2030</h2>
                                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.</p>
                                            <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                            <div className="hero__social">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <div className="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Fall - Winter Collections 2030</h2>
                                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.</p>
                                            <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                            <div className="hero__social">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 offset-lg-4">
                                <div className="banner__item">
                                    <div className="banner__item__pic">
                                        <img src="img/banner/banner-1.jpg" alt=""/>
                                    </div>
                                    <div className="banner__item__text">
                                        <h2>Clothing Collections 2030</h2>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="banner__item banner__item--middle">
                                    <div className="banner__item__pic">
                                        <img src="img/banner/banner-2.jpg" />
                                    </div>
                                    <div className="banner__item__text">
                                        <h2>Accessories</h2>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="banner__item banner__item--last">
                                    <div className="banner__item__pic">
                                        <img src="img/banner/banner-3.jpg" />
                                    </div>
                                    <div className="banner__item__text">
                                        <h2>Shoes Spring 2030</h2>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product spad">
                <ProductListContainer pro/>
                    
                </section>     
                
                {/* <!-- Categories Section Begin --> */}
                <section className="categories spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__text">
                                    <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="categories__hot__deal">
                                    <img src="img/product-sale.png" alt=""/>
                                    <div className="hot__deal__sticker">
                                        <span>Sale Of</span>
                                        <h5>$29.99</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1">
                                <div className="categories__deal__countdown">
                                    <span>Deal Of The Week</span>
                                    <h2>Multi-pocket Chest Bag Black</h2>
                                    <div className="categories__deal__countdown__timer" id="countdown">
                                        <div className="cd-item">
                                            <span>3</span>
                                            <p>Days</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>1</span>
                                            <p>Hours</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>50</span>
                                            <p>Minutes</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>18</span>
                                            <p>Seconds</p>
                                        </div>
                                    </div>
                                    <a href="#" className="primary-btn">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Categories Section End --> */}

                {/* <!-- Instagram Section Begin --> */}
                <section className="instagram spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="instagram__pic">
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-1.jpg"></div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-2.jpg"></div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-3.jpg"></div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-4.jpg"></div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-5.jpg"></div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-6.jpg"></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="instagram__text">
                                    <h2>Instagram</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                    <h3>#Male_Fashion</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Instagram Section End --> */}

                {/* <!-- Latest Blog Section Begin --> */}
                <section className="latest spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Latest News</span>
                                    <h2>Fashion New Trends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-1.jpg"></div>
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt=""/> 16 February 2020</span>
                                        <h5>What Curling Irons Are The Best Ones</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-2.jpg"></div>
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt=""/> 21 February 2020</span>
                                        <h5>Eternity Bands Do Last Forever</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-3.jpg"></div>
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt=""/> 28 February 2020</span>
                                        <h5>The Health Benefits Of Sunglasses</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);