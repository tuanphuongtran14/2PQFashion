import React,{Component,Fragment} from 'react';
// import CartItem from './CartItem';
// import $ from "jquery";
class Cart extends Component {

  render(){
    return (
        <Fragment>
            <table className="table product-table table-hover cart" >
                <thead>
                    <tr>
                        <th className="col-2">Hình ảnh</th>
                        <th className="col-2">Sản Phẩm</th>
                        <th className="col-1">kích thước</th>
                        <th className="col-1">Giá</th>
                        <th className="col-1">Số lượng hàng trong kho</th>
                        <th className="col-1">Số Lượng</th>
                        <th className="col-2">Tổng Cộng</th>
                        <th className="col-1">Hành động</th>
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
