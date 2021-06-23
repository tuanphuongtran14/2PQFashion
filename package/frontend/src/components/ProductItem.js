import React,{Component,Fragment} from 'react';

class ProductItem extends Component {
    renderClass=(status)=>{
        let result='';
        if(status===2){
            result="hot-sales";
        }else if(status===1){
            result="new-arrivals";
        }
        return result;
    }
    renderStarRate(star){
        let result=[];
        for(let i=1;i<=star;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
            
        }
        for(let i=1;i<=5-star;i++){
            result.push(<i key={i+5} className="fa fa-star-o"></i>);
        }
        return result;
    }
    renderOption(status,onChange){
        let result="";
        if(onChange===3){
            result="";
        }else {
            if(status===onChange){
            result="";
            }else{
                result="hideProduct"
            }
        }
        return result;
    }
    onClick=(e)=>{
        e.preventDefault();
        const{sku,slug,price,name,images,options}=this.props.product;
        var size=options[0].size;
        var inventory=options[0].quantity;
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

        }                     
        this.props.onAddToCart(cartItem);
    }
    render(){
        const{images,name,price,status,rating}=this.props.product;
        const {onChange,onPage}=this.props;
        const addClass=this.renderClass(status);
        const result=onPage===1?` ${addClass} ${this.renderOption(status,onChange)}`:'';
        
        return (
            <Fragment>
                <div className={`${onPage===1?'col-lg-3':'col-lg-4'} col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${result}`} >
                    <div className="product__item">
                        <div className="product__item__pic " style={{backgroundImage:`url(${process.env.REACT_APP_API_URL}${images[0]})`, backgroundSize: 'cover'}} >
                        <span className="label label--sales" style={{display:`${status!==2?'none':'block'}`}}>Sale</span>
                            <ul className="product__hover">
                                <li><button type="button" className="btn--square border"><i className="fa fa-heart-o" aria-hidden="true"></i></button></li>
                                <li><button type="button" onClick={this.onClick} className="btn--square border"><i className="fa fa-cart-plus" aria-hidden="true"></i></button></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>{name}</h6>
                            <div className="rating">
                                {this.renderStarRate(rating.grade)}
                            </div>
                            <h5>${price}</h5>
                        </div>
                    </div>
                </div>

            </Fragment>
            
        );
    }
  
}

export default ProductItem;
