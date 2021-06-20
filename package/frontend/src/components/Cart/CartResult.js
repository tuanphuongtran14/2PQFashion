import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CartResult extends Component {
    render(){
        return (
            <tr>
            <td colSpan="2"></td>
            <td colSpan="2">
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td colSpan="2">
                <h4>
                    <strong>{this.props.total}VND</strong>
                </h4>
            </td>
            <td colSpan="2">
                <Link to={'/payment'} className="btn btn-primary waves-effect waves-light">Complete purchase
                    
                </Link>
            </td>
        </tr>
    
        );
    }
}

export default CartResult;
