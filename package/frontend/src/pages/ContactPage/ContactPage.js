import React, { Component } from 'react';
import Map from './Map';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

class ContactPage extends Component {
    render() {
        return (
            <div>
                {/* Map Begin */}
                <Map />
                {/* Map End */}
                {/* Contact Section Begin */}
                <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ContactText />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                </section>
                {/* Contact Section End */}
            </div>
        );
    }
}

export default ContactPage;