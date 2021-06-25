import React, { Component } from 'react';
import {Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import { withRouter } from 'react-router-dom';

class RegisterPage extends Component {
    handleRegister = (event) => {
        event.preventDefault();
        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value, 
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value, 
        }
        if(document.getElementById("password").value === document.getElementById("passwordConfirmed").value)
        (
            axios({
                method: 'POST',
                url: '/register',
                data
            }).then(res => {
                if(res && res.status === 200) {
                    if(window.confirm('Tạo tài khoản thành công, bạn có muốn đăng nhập ngay?')) {
                        this.props.history.push('/login');
                    }
                }
            }).catch(error => {
                if(error.response) {
                    alert("Lỗi: " + error.response.data.message)
                }
            })
        )
        else {
            alert("Mat khau khong giong nhau")
        }
    }
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
                        <label for="username">Tên tài khoản</label>
                        <input type="text" name="username" id="username" class="form-control" placeholder="Số điện thoại" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" class="form-control" placeholder="Tên" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="password">Mật khẩu</label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="Mật khẩu" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="passwordConfirmed">Xác nhận mật khẩu</label>
                        <input type="password" name="passwordConfirmed" id="passwordConfirmed" class="form-control" placeholder="Xác nhận mật khẩu" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="address">Địa chỉ</label>
                        <input type="text" name="address" id="address" class="form-control" placeholder="Số điện thoại" aria-describedby="helpId" /> 
                    </div>
                    <div class="form-group">
                        <label for="phone">Số điện thoại</label>
                        <input type="text" name="phone" id="phone" class="form-control" placeholder="Số điện thoại" aria-describedby="helpId" /> 
                    </div>
                    <div className="text-center">
                        <button class="btn btn-dark" onClick={this.handleRegister}>Tạo tài khoản mới</button>
                    </div> 
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.authorization
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (token) => {
            dispatch(actions.setToken(token));
        },
        setAdmin: (isAdmin) => {
            dispatch(actions.setAdmin(isAdmin));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage));