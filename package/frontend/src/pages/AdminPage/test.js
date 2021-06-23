import React, { Component } from 'react';
import axios from 'axios';

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/products/AT1806211619'
        }).then(response => {
            if(response && response.status === 200) {
                this.setState({
                    product: response.data
                })
            }
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.product.name}</p>
                <p>{this.state.product.fullDesc}</p>
                <p>{this.state.product.category}</p>
            </div>
        )
    }
}
