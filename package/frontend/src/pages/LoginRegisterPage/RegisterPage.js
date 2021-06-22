import React, { Component } from 'react';
import {Helmet } from 'react-helmet'

class RegisterPage extends Component {
    render() {
        return (
            <div className="container mt-2 mb-4">
                <Helmet>
                    <title>Đăng ký</title>
                </Helmet>
                <form className="regForm mx-auto shadow p-4">
                    <h2 className="text-center">Đăng ký</h2>
                    <p className="text-center"><u><a href="/login">Đã có tài khoản? Đăng nhập ngay.</a></u></p>
                    <div class="form-group">
                        <label for="">Tên</label>
                        <input type="text" name="" id="" class="form-control" placeholder="Tên" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="">Họ</label>
                        <input type="text" name="" id="" class="form-control" placeholder="Tên" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" name="" id="" class="form-control" placeholder="Tên" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="">Số điện thoại</label>
                        <input type="text" name="" id="" class="form-control" placeholder="Số điện thoại" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="">Mật khẩu</label>
                        <input type="text" name="" id="" class="form-control" placeholder="Mật khẩu" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="">Xác nhận mật khẩu</label>
                        <input type="text" name="" id="" class="form-control" placeholder="Xác nhận mật khẩu" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <div>
                            <label class="btn active">
                                <input type="radio" name="gender" id="" autocomplete="off" checked />Nam
                            </label>
                            <label class="btn">
                                <input type="radio" name="gender" id="" autocomplete="off" />Nữ
                            </label> 
                        </div> 
                    </div>
                    <div className="text-center">
                        <a name="" id="" class="btn btn-dark" href="/" role="button">Tạo tài khoản mới</a>
                    </div> 
                </form>
            </div>
        );
    }
}

export default RegisterPage;