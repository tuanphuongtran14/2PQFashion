import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import AboutSection from './AboutSection';
import TestimonialSection from './TestimonialSection'
import CounterSection from './CounterSection'
import TeamSection from './TeamSection'
import ClientSection from './ClientSection'
import {Helmet} from 'react-helmet'
import $ from 'jquery';

class AboutPage extends Component {
    
    componentDidUpdate() {
        /*------------------
            Background Set
            --------------------*/
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
            });
                
    }
    render() {
        return ( 
            <div>
                <Helmet>
                    <title>About us</title>
                </Helmet>

                {/* Breadcrumb Section Begin */}
                    <Breadcrumb breadcrumbs={
                        [ 'Home', 'About' ]}
                    />
                {/* Breadcrumb Section End */}
                {/* About Section Begin */}
                <AboutSection/>
                {/* About Section End */}
                {/* Testimonial Section Begin */}
                <TestimonialSection />
                {/* Testimonial Section End */}
                {/* Counter Section Begin */}
                <CounterSection />
                {/* Counter Section End */}
                {/* Team Section Begin */}
                <TeamSection />
                {/* Team Section End */}
                {/* Client Section Begin */}
                <ClientSection />
                {/* Client Section End */}
            </div>
        );
    }
}

export default AboutPage;