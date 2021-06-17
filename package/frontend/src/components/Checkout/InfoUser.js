import React,{Component,Fragment} from 'react';
import $ from "jquery";
import{addBillRequest} from './../../actions'
class InfoUser extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            nameCustomer:'',
            address:'',
            email:'',
            orderNote:'',
            paymentMethod: 'Trả tiền khi nhận hàng',
            phone:0,


        }
    }
    onChange=(event)=>
    {
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:name==='phone'?Number(value):value
        });


    }
    onSubmit=(e)=>{
        e.preventDefault();

        var {history,cart}=this.props;
        var order=this.props.order;
        var {nameCustomer, address,email,orderNote,paymentMethod,phone}=this.state;
        var products=cart.map((item)=>{

            return{
                sku:item.sku,
                quantity:item.quantity,
                price:item.price,
            }   
        })
        const price = cart.reduce((total, item) => {
            return total + item.quantity*item.price;
          }, 0);
        var newBill={
            products: products,
             totalPrice: price-order.salePrice
             ,
             nameCustomer:nameCustomer,
             id_User: order.id_User,
             coupon: order.coupon,
             address: address,
             email: email,
             orderNote:orderNote===''?' ':orderNote,
             paymentMethod: paymentMethod,
             phone: phone,
        };
        addBillRequest(newBill)
        .then(()=>{
            this.props.onAddBillSucess(true);
            history.replace('/');
        })

    }
  render(){
      var {nameCustomer, address,email,orderNote,paymentMethod,phone}=this.state;
    return (
        <Fragment>
            <h6 className="coupon__code"><span className="icon_tag_alt"></span>
            Welcome to the payment page</h6>
            <h6 className="checkout__title">Billing Details</h6>
            <form onSubmit={this.onSubmit}>
                <div className="checkout__input">
                    <p>Name<span>*</span></p>
                    <input type="text" value={nameCustomer} name='nameCustomer' onChange={this.onChange} required/> 
                </div>
                <div className="checkout__input">
                    <p>Address<span>*</span></p>
                    <input type="text" placeholder="Street Address" 
                    onChange={this.onChange} className="checkout__input__add" value={address} name='address' required/>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="checkout__input">
                            <p>Phone<span>*</span></p>
                            <input type="number" value={phone} name='phone' onChange={this.onChange} required/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="checkout__input">
                            <p>Email<span>*</span></p>
                            <input type="email" value={email} name='email' onChange={this.onChange} required/>
                        </div>
                    </div>
                </div>
                <div className="checkout__input">
                    <select id="PaymentMethod" value={paymentMethod} name='paymentMethod' className="custom-select" onChange={this.onChange}>
                        <option value="Trả tiền khi nhận hàng">Trả tiền khi nhận hàng</option>
                        <option value="Chuyển khoản ngân hàng">Chuyển khoản ngân hàng</option>
                        <option value="Ví điện tử momo">Ví điện tử momo</option>
                        <option value="Cổng thanh toán VNPay">Cổng thanh toán VNPay</option>
                    </select>
                </div>
                
                <div className="checkout__input">
                    <p>Order notes<span>*</span></p>
                    <input type="text"
                    placeholder="Notes about your order, e.g. special notes for delivery." 
                    onChange={this.onChange} value={orderNote} name='orderNote'/>
                </div>
                <button type="submit" className="site-btn" >PLACE ORDER</button>
            </form>
        </Fragment>
        
    );
  }
  
}


export default InfoUser;
