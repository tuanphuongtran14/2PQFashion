import React,{Component,Fragment} from 'react';
import ProductList from './../components/ProductList'
import {connect} from 'react-redux'
import ProductItem from './../components/ProductItem';
class ProductListContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      option:3,
    }
  }
  renderProductItems(products){
    var result=null;
    const onPage=this.props.onPage;
    if(products.length>0){
        result=products.map((product,index)=>{
          if(onPage===1){
            if(product.status!=0){
                return (<ProductItem
                    key={index}
                    index={index}
                    product={product}
                    onChange={this.state.option}
                    onPage={this.props.onPage}
                />)
            } 
          }         
        })
    }
    return result;
    
}
  onClick(option){
      this.setState({
        option:option
      })
  }
  render(){
    var {products,keyword}=this.props;
    //xử lý sự kiện search
    if(keyword){
      products=products.filter(product=>{
          return product.name.toLowerCase().indexOf(keyword)!==-1;
      })
  }
    return (
        <Fragment>
            <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*" onClick={()=>{this.onClick(3)}}>Best Sellers</li>
                                    <li data-filter=".new-arrivals" onClick={()=>{this.onClick(1)}}>New Arrivals</li>
                                    <li data-filter=".hot-sales" onClick={()=>{this.onClick(2)}}>Hot Sales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row product__filter">
                            <ProductList 
                             >
                                {this.renderProductItems(products)}
                            </ProductList>
                        </div>
                    </div>
                </section>     
        </Fragment>
        
    );
  }
  
}

const mapStateToProps=(state)=>{
  return {
      products:state.products,
      onPage:state.page,
      keyword:state.search
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer);
