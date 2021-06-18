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
        const{sku,slug,price,name,images}=this.props.product;
        const cartItem={
            sku:sku,
            name:name,
            images:images,
            slug:slug,
            price:price,
            quantity:1,
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
                        <div className="product__item__pic " style={{backgroundImage:`url(${images[0]})`}} >
                        <span className="label" style={{display:`${status!==2?'none':'block'}`}}>Sale</span>
                            <ul className="product__hover">
                                <li><button type="button" className="btn--square"><i className="fa fa-heart-o" aria-hidden="true"></i></button></li>
                                <li><button type="button" onClick={this.onClick} className="btn--square"><i className="fa fa-cart-plus" aria-hidden="true"></i></button></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>{name}</h6>
                            <div className="rating">
                                {this.renderStarRate(rating.grade)}
                            </div>
                            <h5>${price}</h5>
                            <div className="product__color__select">
                                <label >
                                    <input type="radio" id="pc-4"/>
                                </label>
                                <label className="active black">
                                    <input type="radio" id="pc-5"/>
                                </label>
                                <label className="grey">
                                    <input type="radio" id="pc-6"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
            
        );
    }
  
}

export default ProductItem;
