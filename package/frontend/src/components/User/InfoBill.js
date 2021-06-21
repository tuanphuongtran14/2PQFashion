import React,{Component,Fragment} from 'react';
import DetailProductBill from './DetailProductBill';
import {connect} from 'react-redux'
// import $ from "jquery";
class InfoBill extends Component {


    renderProductsInBill=(bills)=>{
        var products=[];
        var id_Bill=this.props.match.params.idBill;
        bills.forEach((item, index)=>{
            
            if(id_Bill===item.id_Bill){
                products=item.products;
                
            }
            
        })
        var result=null;
        result=products.map((item,index)=>{
            return <DetailProductBill key={index}
            product={item}/>;
        })
        return result;
    }
  render(){
    var {list_bill}=this.props;
    return (
        <Fragment>
            <h4 className="text-center mb-4">Chi tiết đơn hàng của tôi</h4>
            <div className="row">
                <table className="table product-table" >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>kích thước</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderProductsInBill(list_bill)}
                    </tbody>
                </table>
            </div>
            {/* <div className="row">
                <class
            </div> */}
        </Fragment>
        
    );
  }
  
}


const mapStateToProps=(state)=>{
    return {
        list_bill:state.list_bill
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
     
        }
    }
  export default connect(mapStateToProps,mapDispatchToProps)(InfoBill);
