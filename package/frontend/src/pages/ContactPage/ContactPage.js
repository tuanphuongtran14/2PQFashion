import React, { Component } from 'react';
import Map from './Map';
import ContactSection from './ContactSection'
import {Helmet} from 'react-helmet'
import WOW from 'wowjs'
class ContactPage extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init(); 
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Thông tin liên hệ</title>
                </Helmet>
                {/* Map Begin */}
                <Map />
                {/* Map End */}
                {/* Contact Section Begin */}
                <ContactSection />
                {/* Contact Section End */}
            </div>
        );
    }
}

export default ContactPage;