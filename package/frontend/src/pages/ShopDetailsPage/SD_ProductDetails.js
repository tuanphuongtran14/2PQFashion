import React, { Component } from 'react';
import $ from 'jquery';
import {Helmet } from 'react-helmet'
import convertToMoney from './../../utils/convertMoney'
import {connect} from 'react-redux';
import * as actions from '../../actions/index'

class SD_ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            size:'',
            quantitySize:0,
        }
        ;
    }
    
    // static getDerivedStateFromProps(nextProps, prevState) {
        
    componentDidUpdate(prevProps,prevState) {
        
        $(".shop__sidebar__size label, .product__details__option__size label").on('click', function () {
            $(".shop__sidebar__size label, .product__details__option__size label").removeClass('active');
            $(this).addClass('active');
        });
        var {options}=this.props.product;
        if (prevProps.product !==this.props.product ) {
            this.setState({
                size:options[0].size,
                quantitySize:options[0].remaining
            })
        }


        
    }
    onClick=()=>{
        var {size,quantitySize} = this.state;
        var {token,history}=this.props;
        if(!token){
            history.replace('/login');
        }else{
            const{sku,slug,price,name,images,options}=this.props.product;   
        var inventory=quantitySize;
        var quantity=inventory===0?0:1;
    
        const cartItem={
            sku:sku,
            name:name,
            images:images,
            slug:slug,
            price:price,
            size:size,
            inventory:inventory,
            quantity:quantity,
            options:options,
            index:0,

        }  
                           
        this.props.onAddToCart(cartItem);
        }

    }
    onClickSize=(value)=>
    {
        var product = this.props.product;
        var options=product.options;
        var quantity=0;
        
        if(product.options){
            
            options.forEach((item,index)=>{
                if(item.size===value){
                    
                    quantity=item.remaining;
                    
                }
            })

            this.setState({
                size:value,
                quantitySize:quantity
            })
        }
        
        


    }
    render() {
       
        var product = this.props.product; 
        let options = this.props.options;
        let {quantitySize,size}=this.state;
        let displaySize = [];
        if (options){
            // console.log(options);
            displaySize = options.map((option,index) => {
                return (
                    <label key={index}
                        onClick={()=>this.onClickSize(option.size)}
                        className={ size ===option.size? "active" : "" }
                    >{option.size}     
                    </label>
                )
            })
        }
        return (
            <div className="product__details__text wow fadeInLeftBig " data-wow-duration="1s">
                <Helmet>
                    <title>{product.name}</title> 
                </Helmet> 
                {/* <h1>{displaySize}</h1> */}
                <h4>{product.name}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span> - 5 ????nh gi??</span>
                </div>
                <h3>{convertToMoney(product.price)}VND</h3>
                <p>{product.shortDesc}</p>
                <div className="product__details__option">
                    <div className="product__details__option__size">
                        <span>K??ch c???:</span>
                        {displaySize} 
                    </div>
                    
                </div>
                <div className="product__details__cart__option">
                    <div className="quantity">
                        <div className="">
                            {/* <input type="text"   /> */}
                            {/* <input type="text" value="1"  /> */}
                            <span>S??? l?????ng s???n ph???m trong kho <b>{quantitySize}</b> s???n ph???m</span>
                        </div>
                    </div>
                    <button className="primary-btn" onClick={this.onClick}>Th??m v??o gi??? h??ng</button>
                </div>
                <div className="product__details__last__option">
                    <h5><span>C??c k??nh thanh to??n</span></h5>
                    <img src="img/shop-details/details-payment.png" alt="" />
                    <ul>
                        <li><span>SKU:</span> {product.sku}</li>
                        <li><span>Lo???i:</span> {product.category}</li>
                        <li><span>Nh??n:</span> {product.tags}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        ...state.authorization,
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        onAddToCart:(product)=>{
            dispatch(actions.onAddToCart(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SD_ProductDetails);