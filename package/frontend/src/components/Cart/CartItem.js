import React,{Component,Fragment} from 'react';
// import $ from "jquery";
import {Link} from 'react-router-dom';
// import Cart from './Cart';
class CartItem extends Component {

    onChange=(event)=>
    {
        var target=event.target;
       // var name=target.name;
        var value=target.value;
        const {cartItem}=this.props;
        cartItem.size=value;
        this.props.onUpdateProductToCart(cartItem);


    }
    onDeleteProductToCart(cartItem){
        this.props.onDeleteProductToCart(cartItem);
    }
    UpdateQuantity(cartItem, quantity){
        cartItem.quantity+=quantity;
        if(cartItem.inventory<cartItem.quantity){
            cartItem.quantity=cartItem.inventory;
        }
        cartItem.quantity=cartItem.quantity>0?cartItem.quantity:1;
        if(cartItem.inventory===0){
            cartItem.quantity=0;
        }
        this.props.onUpdateProductToCart(cartItem);
    }
    renderOption=(options)=>{
        var result=null;
        result=options.map((item,index)=>{
            return <option value={item.size} key={index}>{item.size}</option>
        })
        return result;
    }
  render(){
    const    {cartItem}=this.props;
    var {quantity, inventory,size,options}=cartItem;
    return (
       
        <Fragment>
            <tr>
                <th scope="row">
                    <Link to={"#"} >
                        <img src={cartItem.images[0]}
                            alt="" className=" z-depth-0" />
                    </Link>
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.name}</strong>
                    </h5>
                </td>
                <td>
                <select name="size" className="custom-select" value={size} onChange={this.onChange}>
                        {this.renderOption(options)}
                </select>
                </td>
                <td>{cartItem.price} VND</td>
                <td>{inventory===0?'sản phẩm tạm hết hàng':inventory}</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" >
                        <button type="button" className="btn btn-sm btn-secondary waves-effect waves-light" 
                        onClick={()=>this.UpdateQuantity(cartItem,-1)}>—</button>
                        <button type="button" className="btn btn-sm btn-secondary waves-effect waves-light"
                        onClick={()=>this.UpdateQuantity(cartItem,1)}
                        >+</button>    
                    </div>
                </td>
                <td>{cartItem.price*quantity}VND</td>
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
