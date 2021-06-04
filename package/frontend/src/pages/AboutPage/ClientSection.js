import React, { Component } from 'react';

class ClientSection extends Component {
    render() {
        return (
            <section className="clients spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-1.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-2.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-3.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-4.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-5.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-6.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-7.png" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="/" className="client__item"><img src="img/clients/client-8.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ClientSection;