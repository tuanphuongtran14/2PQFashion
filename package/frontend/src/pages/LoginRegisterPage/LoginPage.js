import React, { Component } from 'react';
import {Helmet} from 'react-helmet'

// chi tiết sản phẩm -- 
// đăng nhập, đăng kí --- Phúc
class LoginPage extends Component {
    render() {
        return (
            
            <div className='container mt-2 mb-5'> 
                <Helmet>
                    <title>Đăng nhập</title>
                </Helmet>
                <form className="row">
                    <div className="col-md-6 p-4 shadow">
                        <div className="form-group">
                            <h2 className="text-center">Đăng nhập</h2>
                            <label for="">Đăng nhập</label>
                            <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Tên đăng nhập" />
                        </div>
                        <div class="form-group">
                            <label for="">Mật khẩu</label>
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Mật khẩu" /> 
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-dark">Đăng nhập</button>
                        </div>
                        <div className="pt-3 text-center text-secondary">
                            <a className="text-decoration-none" href="/"><i>Quên mật khẩu?</i></a>
                        </div>
                    </div>

                    <div className="col-md-6 p-5">
                        <h2>Người Mới? Tạo Tài Khoản</h2>
                        <p>Bằng cách tạo tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể thực hiện 
                            quy trình thanh toán nhanh hơn, lưu trữ nhiều địa chỉ giao hàng, xem và 
                            theo dõi đơn đặt hàng trong tài khoản của bạn và hơn thế nữa.
                        </p>
                        <a href="/register"><button type="button" class="btn btn-primary">Tạo tài khoản mới</button></a>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default LoginPage;