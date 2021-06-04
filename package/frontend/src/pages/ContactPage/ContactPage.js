import React, { Component } from 'react';
import Map from './Map';
import ContactSection from './ContactSection'

class ContactPage extends Component {
    render() {
        return (
            <div>
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