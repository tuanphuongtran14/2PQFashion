import React, { Component } from 'react'
import callApi from '../../utils/apiCaller';

export default class AddProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    // handleInputChange = event => {
    //     let target = event.target;
    //     let name = target.name;
    //     let value = target.value;
    //     let type = target.type;

    //     switch(type) {
    //         case 'textarea':
    //         case 'text': 
    //             this.setState({
    //                 [name]: value
    //             });
    //             break;
            
    //         case 'number':
    //             value = Number(value);
    //             this.setState({
    //                 [name]: value
    //             });
    //             break;

    //         case 'select-multiple': 
    //             let options = target.options;
    //             let values = [];
                
    //             for (var i = 0, l = options.length; i < l; i++) {
    //                 if (options[i].selected) {
    //                   values.push(options[i].value);
    //                 }
    //               }
    //             this.setState({
    //                 [name]: values
    //             });
    //             break;

    //         case 'file': 
    //             let files = event.target.files;
    //             let images = [];
    //             for(let i =0; i < files.length; i++) {
    //                 images.push(files[i]);
    //             }
    //             this.setState({
    //                 images: images
    //             });
    //             console.log(this.state)
    //             break;
    //         default: 
    //     }
    // }
    displayLoading = () => {
        if(this.state.loading) {
            return (
                <div className="loading">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        let myForm = document.getElementById('createNewProduct');
        let body = new FormData(myForm);

        if(!myForm.checkValidity()) {
            alert("Vui lòng nhập đủ các thông tin!!!")
        } else {
            this.setState({
                loading: true
            });

            callApi('products', 'POST', body)
            .then(res => {
                this.setState({
                    loading: false
                });
                if(res && res.status === 200) {
                    myForm.reset();
                    alert("Thêm sản phẩm thành công!!!");
                } else {
                    alert("Có lỗi xảy ra, vui lòng thử lại!!!");
                }
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Thêm sản phẩm</h4>
                    <form className="forms-sample" id="createNewProduct">
                        <div className="form-group">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" className="form-control" id="name" name="name" required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Giá sản phẩm</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">0.00</span>
                                </div>
                                <input type="number" min={1} className="form-control" name="price" id="price" required onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Hãng hiệu</label>
                            <input type="text" className="form-control" id="brand" name="brand" required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shortDesc">Mô tả ngắn</label>
                            <textarea className="form-control" id="shortDesc" name="shortDesc" rows={4} required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Kích thước</label>
                            <select className="form-control" id="size" name="size" multiple required onChange={this.handleInputChange}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Màu</label>
                            <select className="form-control" id="color" name="color" multiple onChange={this.handleInputChange} required>
                                <option value="Trắng">Trắng</option>
                                <option value="Đen">Đen</option>
                                <option value="Xanh dương">Xanh dương</option>
                                <option value="Vàng">Vàng</option>
                                <option value="Đỏ">Đỏ</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Số lượng</label>
                            <input type="number" min={1} className="form-control" id="quantity" name="quantity" required placeholder="Số lượng" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Danh mục</label>
                            <input type="text" className="form-control" id="category" name="category" placeholder="Loại sản phẩm" required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input type="text" className="form-control" id="tags" name="tags" required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fullDesc">Mô tả chi tiết</label>
                            <textarea className="form-control" id="fullDesc" name="fullDesc" rows={5} required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="additionalInfo">Thông tin thêm</label>
                            <textarea className="form-control" id="additionalInfo" name="additionalInfo" rows={5} required onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="images">Tải hình ảnh</label>
                            <input type="file" multiple id="images" name="images" className="d-block" required onChange={this.handleInputChange} />
                        </div>
                        <button className="btn btn-success mr-2" onClick={this.handleSubmit}>Thêm sản phẩm</button>
                        <button type="reset" className="btn btn-light">Hủy</button>
                    </form>
                </div>
                {this.displayLoading()}
            </div>
        )
    }
}
