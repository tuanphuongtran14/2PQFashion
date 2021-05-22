import React,{Component,Fragment} from 'react';

class ProductItem extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            status:0,
            images:[],
            price:0,
            color:[],
            rating:0,
                }
    }
    componentWillMount(){
        const{images,name,price,id,color,rating,status}=this.props.product;
        console.log(this.props.product);
        this.setState({
            id:id,
            name:name,
            status:status,
            images:images,
            price:price,
            color:color,
            rating:rating,        })
    }
    componentDidMount(){
       
        const object=document.getElementsByClassName("set-bg");
        Array.prototype.forEach.call(object,(element,index)=>{
            var bg =element.getAttribute('data-setbg')
            element.style.backgroundImage= '(url(' + bg + ')';
        })
      
    }
    render(){
        const{images,name,price}=this.state;

        return (
            <Fragment>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg={images[0]}>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>{name}</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>{price}</h5>
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
