import React, { Component } from 'react';

class SD_Pictures extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                <div className="product__thumb__pic set_bg" data-setbg="img/shop-details/thumb-1.png">
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                <div className="product__thumb__pic set_bg" data-setbg="img/shop-details/thumb-2.png">
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                <div className="product__thumb__pic set_bg" data-setbg="img/shop-details/thumb-3.png">
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                <div className="product__thumb__pic set_bg" data-setbg="img/shop-details/thumb-4.png">
                                    <i className="fa fa-play"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-9">
                    <div className="tab-content">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="product__details__pic__item">
                                <img src="img/shop-details/product-big-2.png" alt="" />
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <div className="product__details__pic__item">
                                <img src="img/shop-details/product-big-3.png" alt="" />
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                            <div className="product__details__pic__item">
                                <img src="img/shop-details/product-big.png" alt="" />
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-4" role="tabpanel">
                            <div className="product__details__pic__item">
                                <img src="img/shop-details/product-big-4.png" alt="" />
                                <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" className="video-popup"><i className="fa fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SD_Pictures;