import React,{Component,Fragment} from 'react';
// import CartItem from './CartItem';
// import $ from "jquery";
class Cart extends Component {

  render(){
    return (
        <Fragment>
            <table className="table product-table cart" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Sản Phẩm</th>
                        <th>kích thước</th>
                        <th>Giá</th>
                        <th>Số lượng hàng trong kho</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.children}
                </tbody>
            </table>
        </Fragment>
        
    );
  }
  
}


export default Cart;
