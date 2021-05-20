import React,{Component,Fragment} from 'react';

class IndexPage extends Component {
  render(){
    return (
        <Fragment>
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Best Sellers</li>
                                <li data-filter=".new-arrivals">New Arrivals</li>
                                <li data-filter=".hot-sales">Hot Sales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                                    <span className="label">New</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Piqué Biker Jacket</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label >
                                            <input type="radio" id="pc-1" />
                                        </label>
                                        <label className="active black" >
                                            <input type="radio" id="pc-2"/>
                                        </label>
                                        <label className="grey" >
                                            <input type="radio" id="pc-3"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Piqué Biker Jacket</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$67.24</h5>
                                    <div className="product__color__select">
                                        <label >
                                            <input type="radio" id="pc-4"/>
                                        </label>
                                        <label className="active black">
                                            <input type="radio" id="pc-5"/>
                                        </label>
                                        <label className="grey">
                                            <input type="radio" id="pc-6"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                                    <span className="label">Sale</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Multi-pocket Chest Bag</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$43.48</h5>
                                    <div className="product__color__select">
                                        <label>
                                            <input type="radio" id="pc-7"/>
                                        </label>
                                        <label className="active black">
                                            <input type="radio" id="pc-8"/>
                                        </label>
                                        <label className="grey">
                                            <input type="radio" id="pc-9"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Diagonal Textured Cap</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$60.9</h5>
                                    <div className="product__color__select">
                                        <label>
                                            <input type="radio" id="pc-10"/>
                                        </label>
                                        <label className="active black" >
                                            <input type="radio" id="pc-11"/>
                                        </label>
                                        <label className="grey">
                                            <input type="radio" id="pc-12"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Lether Backpack</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$31.37</h5>
                                    <div className="product__color__select">
                                        <label>
                                            <input type="radio" id="pc-13"/>
                                        </label>
                                        <label className="active black" >
                                            <input type="radio" id="pc-14"/>
                                        </label>
                                        <label className="grey" >
                                            <input type="radio" id="pc-15"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                                    <span className="label">Sale</span>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Ankle Boots</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$98.49</h5>
                                    <div className="product__color__select">
                                        <label>
                                            <input type="radio" id="pc-16"/>
                                        </label>
                                        <label className="active black">
                                            <input type="radio" id="pc-17"/>
                                        </label>
                                        <label className="grey">
                                            <input type="radio" id="pc-18"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>T-shirt Contrast Pocket</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$49.66</h5>
                                    <div className="product__color__select">
                                        <label >
                                            <input type="radio" id="pc-19"/>
                                        </label>
                                        <label className="active black">
                                            <input type="radio" id="pc-20"/>
                                        </label>
                                        <label className="grey" >
                                            <input type="radio" id="pc-21"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Basic Flowing Scarf</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h5>$26.28</h5>
                                    <div className="product__color__select">
                                        <label>
                                            <input type="radio" id="pc-22"/>
                                        </label>
                                        <label className="active black" >
                                            <input type="radio" id="pc-23"/>
                                        </label>
                                        <label className="grey">
                                            <input type="radio" id="pc-24"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     
            
            {/* <!-- Categories Section End --> */}

            {/* <!-- Instagram Section Begin --> */}
            
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
        </Fragment>
    );
  }
  
}

export default IndexPage;
