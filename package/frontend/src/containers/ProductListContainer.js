import React,{Component,Fragment} from 'react';
import ProductList from './../components/ProductList'
class ProductListContainer extends Component {
  render(){
    const {children} = this.props;
    return (
        <Fragment>
            <ProductList >
              {children}
            </ProductList>
        </Fragment>
        
    );
  }
  
}

export default ProductListContainer;
