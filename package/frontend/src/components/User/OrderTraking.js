import React,{Component,Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from './../../actions'
import DetailBill from './DetailBill';
class OrderTraking extends Component {

    
    renderListBills=(bills)=>{
        var result=null;
        result =bills.map((bill,index)=>{
            return <DetailBill key={index}  bill={bill} />
        })
        return result;
    }
  render(){
      var {list_bill}=this.props;
    return (
        <Fragment>
            <h4 className="text-center mb-4">Theo dõi đơn hàng</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Ngày mua</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Trạng thái đơn hàng</th>
                        <th scope="col">Hàng động</th>
                    </tr>
                </thead>
                <tbody>
                   {this.renderListBills(list_bill)}
                </tbody>
            </table>
        </Fragment>
        
    );
  }
  
}

const mapStateToProps=(state)=>{
    return {
        user:state.user,
        list_bill:state.list_bill
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
      onFetchBillsByUserRequest:(id_User)=>{
        dispatch(actions.fetchBillsByUserRequest(id_User));
      }
        }
    }
  export default connect(mapStateToProps,mapDispatchToProps)(OrderTraking);
