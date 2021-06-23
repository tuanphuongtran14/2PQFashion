import React, { Component } from 'react';

class SD_breadcrumb extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="product__details__breadcrumb">
                        <a href="./">Home</a>
                        <a href="./shop">Shop</a>
                        <span>Product Details</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SD_breadcrumb;