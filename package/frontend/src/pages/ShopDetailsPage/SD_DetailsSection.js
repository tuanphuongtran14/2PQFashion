import React, { Component } from 'react';
import SD_Breadcrumb from './SD_Breadcrumb';
import SD_Pictures from './SD_Pictures';
import SD_ProductDetails from './SD_ProductDetails';
import SD_ProductDetailsTab from './SD_ProductDetailsTab';

class SD_DetailsSection extends Component {
    render() {
        return (
            <section className="shop-details">
                    <div className="product__details__pic">
                        <div className="container">
                            <SD_Breadcrumb />
                            <SD_Pictures />
                        </div>
                    </div>
                    <div className="product__details__content">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <SD_ProductDetails />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <SD_ProductDetailsTab />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default SD_DetailsSection;