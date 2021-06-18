import React,{Component,Fragment} from 'react';
// import $ from "jquery";
import {Link} from 'react-router-dom';
// import Cart from './Cart';
class CartItem extends Component {

    onDeleteProductToCart(cartItem){
        this.props.onDeleteProductToCart(cartItem);
    }
    UpdateQuantity(cartItem, quantity){
        cartItem.quantity+=quantity;
        cartItem.quantity=cartItem.quantity>0?cartItem.quantity:1;
        this.props.onUpdateProductToCart(cartItem);
    }
  render(){
    const    {cartItem}=this.props;

    return (
        <Fragment>
            <tr>
                <th scope="row">
                    <Link to={"#"} >
                        <img src={cartItem.images[0]}
                            alt="" className="img-fluid z-depth-0" />
                    </Link>
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cartItem.quantity}</span>
                    <div className="btn-group radio-group" >
                        <button type="button" className="btn btn-sm btn-secondary waves-effect waves-light" 
                        onClick={()=>this.UpdateQuantity(cartItem,-1)}>—</button>
                        <button type="button" className="btn btn-sm btn-secondary waves-effect waves-light"
                        onClick={()=>this.UpdateQuantity(cartItem,1)}
                        >+</button>    
                    </div>
                </td>
                <td>{cartItem.price*cartItem.quantity}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-danger"
                        title="" 
                        onClick={()=>this.onDeleteProductToCart(cartItem)}
                    >
                        X
                    </button>
                </td>
            </tr>
        </Fragment>
        
    );
  }
  
}


export default CartItem;
