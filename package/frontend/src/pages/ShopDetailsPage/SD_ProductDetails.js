import React, { Component } from 'react';

class SD_ProductDetails extends Component {
    render() {
        return (
            <div className="product__details__text">
                <h4>Hooded thermal anorak</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span> - 5 Reviews</span>
                </div>
                <h3>$270.00 <span>70.00</span></h3>
                <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                    cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                with placket.</p>
                <div className="product__details__option">
                    <div className="product__details__option__size">
                        <span>Size:</span>
                        <label for="xxl">xxl
                            <input type="radio" id="xxl" />
                        </label>
                        <label className="active" for="xl">xl
                            <input type="radio" id="xl" />
                        </label>
                        <label for="l">l
                            <input type="radio" id="l" />
                        </label>
                        <label for="sm">s
                            <input type="radio" id="sm" />
                        </label>
                    </div>
                    <div className="product__details__option__color">
                        <span>Color:</span>
                        <label className="c-1" for="sp-1">
                            <input type="radio" id="sp-1" />
                        </label>
                        <label className="c-2" for="sp-2">
                            <input type="radio" id="sp-2" />
                        </label>
                        <label className="c-3" for="sp-3">
                            <input type="radio" id="sp-3" />
                        </label>
                        <label className="c-4" for="sp-4">
                            <input type="radio" id="sp-4" />
                        </label>
                        <label className="c-9" for="sp-9">
                            <input type="radio" id="sp-9" />
                        </label>
                    </div>
                </div>
                <div className="product__details__cart__option">
                    <div className="quantity">
                        <div className="pro-qty">
                            <input type="text" value="1" />
                        </div>
                    </div>
                    <a href="/" className="primary-btn">add to cart</a>
                </div>
                <div className="product__details__btns__option">
                    <a href="/"><i className="fa fa-heart"></i> add to wishlist</a>
                    <a href="/"><i className="fa fa-exchange"></i> Add To Compare</a>
                </div>
                <div className="product__details__last__option">
                    <h5><span>Guaranteed Safe Checkout</span></h5>
                    <img src="img/shop-details/details-payment.png" alt="" />
                    <ul>
                        <li><span>SKU:</span> 3812912</li>
                        <li><span>Categories:</span> Clothes</li>
                        <li><span>Tag:</span> Clothes, Skin, Body</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SD_ProductDetails;