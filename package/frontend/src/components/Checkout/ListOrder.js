import React,{Component,Fragment} from 'react';
import $ from "jquery";
class ListOrder extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            coupon:'',
            salePrice:0
        }
    }
    onChange=(event)=>
    {
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
        });
    }
    isCheckCoupon=(coupon,price)=>{
        var salePrice=0;
        if(coupon==='quocdeptrai'){
            salePrice=price*5/100;
           this.setState({
            coupon:coupon,
            salePrice:salePrice
        })

        this.props.onAddCouponToOrder(
            {coupon:coupon,
            salePrice:salePrice});
        }
       
        
    }
  render(){
      const {coupon,salePrice}=this.state;
    return (
        <Fragment>
            <div className="checkout__order">
                <h4 className="order__title">Your order</h4>
                <div className="checkout__order__products">Product <span>Total</span></div>
                <ul className="checkout__total__products">
                    {this.props.renderOrderItem}
                </ul>
                <ul className="checkout__total__all">
                    <li>Subtotal <span>${this.props.totalPrice}</span></li>
                    <li>Promotions <span>${salePrice}</span></li>
                    <li>Total <span>${this.props.totalPrice-salePrice}</span></li>
                </ul>
                <p>Coupon</p>
                <div className="row">     
                    <div className="col-lg-6">
                        <div className="checkout__input">  
                            <input type="text" name="coupon" value={coupon} onChange={this.onChange} />

                        </div>
                    </div>
                        <div className="col-lg-6">
                            <button type="button" onClick={()=>this.isCheckCoupon(coupon,this.props.totalPrice)}>Kiểm tra</button>
                        </div>
                        <p></p>
                </div>
            </div>
        </Fragment>
        
    );
  }
  
}


export default ListOrder;
