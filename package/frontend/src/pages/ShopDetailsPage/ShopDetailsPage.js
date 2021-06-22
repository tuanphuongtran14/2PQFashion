import React, { Component } from 'react';
import $ from 'jquery';
import {Helmet } from 'react-helmet'
import SD_DetailsSection from './SD_DetailsSection';
import SD_RelatedSection from './SD_RelatedSection';

class ShopDetailsPage extends Component {

    componentDidMount() {
        /*------------------
        Background Set
        --------------------*/

        $('.set_bg').each(function () {
            var bg = $(this).data('setbg'); 
            $(this).css('background-image', 'url(' + bg + ')');
        });

        /*------------------
        Radio Btn
        --------------------*/
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
            $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
            $(this).addClass('active');
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
        return (
            <div>
                <Helmet>
                    <title>Shop Details</title>
                </Helmet>
                {/* <!-- Shop Details Section Begin --> */}
                    <SD_DetailsSection />
                {/* <!-- Shop Details Section End --> */}

                {/* <!-- Related Section Begin --> */}
                    <SD_RelatedSection />
                {/* <!-- Related Section End --> */}
            </div>
        );
    }
}

export default ShopDetailsPage;