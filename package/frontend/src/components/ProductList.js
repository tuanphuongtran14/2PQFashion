import React,{Component,Fragment} from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render(){
    const {children} = this.props;
    return (
        <Fragment>
            {children}
        </Fragment>
        
    );
  }
  
}

export default ProductList;
