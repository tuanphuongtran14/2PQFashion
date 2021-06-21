import React,{Component,Fragment} from 'react';
// import $ from "jquery";
import {Link} from 'react-router-dom';
import {deleteBill} from './../../actions'
// import Cart from './Cart';
class DetailBill extends Component {

    onChange=(event)=>
    {
        var target=event.target;
       // var name=target.name;
        var value=target.value;
        const {cartItem}=this.props;
        cartItem.size=value;
        this.props.onUpdateProductToCart(cartItem);


    }
    renderName(bill){
        var name='';
        var length=bill.products.length;
        bill.products.forEach((product,index)=>{
            if(index<length-1){
                name+=product.name+', '
            }else{
                name+=product.name;
            }
            
        })
        return name;
    }
    onClick=(id_Bill)=>{
        deleteBill(id_Bill)
    }
    renderStatus=(status)=>{
        if(status===0){
            return <span className="text-warning">Đang xử lý</span>
        }else if(status===1){
            return <span className=".text-primary">Đã tiếp nhận</span>
        }else if(status===2){
            return <span className=".text-info">Đang giao hàng</span>
        }else if(status===3){
            return <span className="text-success">Hoàn thành</span>
        }else if(status===4){
            return <span className="text-danger">Đã hủy</span>
        }
    }
  render(){
     const    {bill}=this.props;
    // var {quantity, inventory,size,options}=cartItem;
    return (
       
        <Fragment>
            <tr > 
                <th scope="row">{bill.id_Bill}</th>
                    <td>{bill.bookingDate}</td>
                    <td>{this.renderName(bill)}</td>
                    <td>{bill.totalPrice} VND</td>
                    <td>{this.renderStatus(bill.status)}</td>
                    <td>
                        <Link type="button" to={`/user/order-traking/${bill.id_Bill}`} className="btn btn-primary mr-3">Xem </Link>
                           
                        <button type="button"  className="btn btn-danger "onClick={()=>this.onClick(bill.id_Bill)}>Hủy</button>
                        
                </td>
            </tr> 
        </Fragment>
        
    );
  }
  
}


export default  DetailBill;
