import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import $ from 'jquery';

class SD_RelatedSection extends Component {

    renderStarRate(star){
        let result=[];
        star = Math.round(star);
        for(let i=1;i<=star;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
            
        }
        for(let i=1;i<=5-star;i++){
            result.push(<i key={i+5} className="fa fa-star-o"></i>);
        }
        return result;
    }

    componentDidUpdate() {
        /*------------------
            Background Set
            --------------------*/
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
            });
                
    }

    render() {
        var {listProduct} = this.props;
        
        var product = listProduct.slice(0, 4).map((product,index) => {
            var images = product.images;
            var image = images.map((image,index) => {
                if (index === 0){
                    return (
                        <div key={index}
                            className="product__item__pic set_bg" 
                            data-setbg={process.env.REACT_APP_API_URL + image} 
                            style={{backgroundImage: "url("+process.env.REACT_APP_API_URL + image+")"}}
                        >
                            <span className="label">Mới</span>
                            <ul className="product__hover">
                                <li><a href="/"><img src="img/icon/heart.png" alt="" /></a></li> 
                                <li><a href="/"><img src="img/icon/search.png" alt="" /></a></li>
                            </ul>
                        </div>
                    )
                }
                
            })
            var star = product.rating.grade;
            return(
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6" key={index}>
                    <div className="product__item">
                        {image}
                        <div className="product__item__text">
                            <h6 >
                                <Link to={`/${product.sku}`}>
                                    {product.name}
                                </Link>
                            </h6>
                            <a href="/" className="add-cart">+ Thêm vào giỏ hàng</a>
                            <div className="rating">
                                {this.renderStarRate(star)}
                            </div>
                            <h5>{product.price}</h5> 
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <section className="related spad"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="related-title">Sản phẩm liên quan</h3>
                        </div>
                    </div>
                    <div className="row">
                        {product}
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default SD_RelatedSection;