import React, { Component } from 'react';
import SDDetailsSection from './SD_DetailsSection';
import SDRelatedSection from './SD_RelatedSection';
import $ from 'jquery';
import {Helmet } from 'react-helmet'
import axios from 'axios'; 
import ScrollToTop from '../../components/ScrollToTop';


class ShopDetailsPage extends Component { 

    // componentDidUpdate() {
    //     {ScrollToTop}
    // }

    constructor(props) {
        super(props);
        this.state = {
            listProduct: [],
            product: {}
        }
    }
    
    componentDidMount() {  
        // window.location.reload();
        if(this.props.match && this.props.match.params.sku){ 
            // window.location.reload();
            axios({
                method: 'GET',
                url: `/api/products/${this.props.match.params.sku}`
            }).then(response => {
                if(response && response.status === 200) {
                    this.setState({
                        product: response.data
                    })
                }
            });
        }
        

        axios({
            method: 'GET',
            url: '/api/products',
        }).then(response => {
            if(response && response.status === 200) {
                this.setState({
                    listProduct: response.data
                })
            }
        })
        /*------------------
        Background Set
        --------------------*/

        $('.set_bg').each(function () {
            var bg = $(this).data('setbg'); 
            $(this).css('background-image', 'url(' + bg + ')');
        });

        /*-------------------
		Quantity change
        --------------------- */
        
        var proQty = $('.pro-qty');
        proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
        proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
        proQty.on('click', '.qtybtn', function () {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });

        
    }

    render() { 
        if(this.state.product){
            return (
                <div> 
                    <ScrollToTop />
                    <Helmet>
                        <title>Shop Details</title> 
                    </Helmet> 
                    {/* <!-- Shop Details Section Begin --> */} 
                        <SDDetailsSection product={this.state.product}/> 
                    {/* <!-- Shop Details Section End --> */}

                    {/* <!-- Related Section Begin --> */}
                        <SDRelatedSection listProduct={this.state.listProduct}/>
                    {/* {/* <!-- Related Section End --> */}
                </div>
            );
        }
        else {
            return;
        }
    }
}

export default ShopDetailsPage;