import React,{Component,Fragment} from 'react';
import ProductList from '../components/ProductList'
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem';
class ShopContainer extends Component {
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
                    onSort={this.props.onSort}
                />)
            } 
          } 
          if(onPage===0){
            return (<ProductItem
                key={index}
                index={index}
                product={product}
                onChange={this.state.option}
                onPage={this.props.onPage}
                onSort={this.props.onSort}
            />)
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
    var {products,keyword,sort}=this.props;
    //xử lý sự kiện search
    if(keyword){
      products=products.filter(product=>{
          return product.name.toLowerCase().indexOf(keyword)!==-1;
      })
  }
  //xử lý sự kiện sort
  if(sort==1){
    products=products.sort(function(product1, product2) {
      if (product1.price > product2.price) return 1;
      else if (product1.price < product2.price) return -1;
      return 0;
  })
}else if(sort==2){
  products=products.sort(function(product1, product2) {
    if (product1.price < product2.price) return 1;
    else if (product1.price > product2.price) return -1;
    return 0;
})
}else if(sort ==3){
  products=products.filter((product,index)=>{
    return product.price<=100;
  })
  products=products.sort(function(product1, product2) {
    if (product1.price > product2.price) return 1;
    else if (product1.price < product2.price) return -1;
    return 0;
})
}else if(sort ==4){
  products=products.filter((product,index)=>{
    return product.price>100;
  })
  products=products.sort(function(product1, product2) {
    if (product1.price > product2.price) return 1;
    else if (product1.price < product2.price) return -1;
    return 0;
})
}
    return (
        <Fragment>       
          <ProductList >
              {this.renderProductItems(products)}
          </ProductList>  
        </Fragment>
        
    );
  }
  
}

const mapStateToProps=(state)=>{
  return {
      products:state.products,
      onPage:state.page,
      keyword:state.search,
      sort:state.sort,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ShopContainer);
