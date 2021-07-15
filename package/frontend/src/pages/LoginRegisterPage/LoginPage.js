import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import { withRouter } from 'react-router-dom';

// chi tiết sản phẩm -- 
// đăng nhập, đăng kí --- Phúc
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        axios({
            method: 'POST',
            url: '/login',
            data: {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }).then(res => {
            if(res && res.status === 200) {
                this.props.setToken(res.data.token);
                
                axios({
                    method: 'GET',
                    url: `/api/users/me`,
                    headers: {
                        "Authorization": `Bearer ${this.props.token}`
                    }
                }).then(res => {
                    if(res && res.status === 200) {
                        this.props.setAdmin(res.data.isAdmin);
                        let user = {
                            ...res.data
                        };
                        this.props.fetchCartByIdUserRequest(user.id_User);
                        this.props.fetchUserByIdRequest(user.id_User);
                        
                        user = JSON.stringify(user);
                        this.props.getUserLogin(user);
                        localStorage.setItem('user', user);
                        this.setState({
                            loading: false
                        });
                        this.props.history.push("/");

                        this.setState({
                            loading: false
                        });
                    }
                });
            }
        }).catch(error => {
            if(error.response) {
                alert("Lỗi: " + error.response.data.message)
            }
            this.setState({
                loading: false
            });
        })
    }

    render() {
        if (this.props.token){
            this.props.history.push("/");
        }
        
        let disabledSubmit = (this.state.loading === true) ? true : false;
        let contentSubmit = (this.state.loading === false) ? 'Đăng nhập' : (
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );

        return (
            
            <div className='container mt-2 mb-5'> 
                <Helmet>
                    <title>Đăng nhập</title>
                </Helmet>
                <form className="row">
                    <div className="col-md-6 p-4 shadow wow fadeInLeftBig" data-wow-duration="1s">
                        <div className="form-group">
                            <h2 className="text-center">Đăng nhập</h2>
                            <label for="username">Đăng nhập</label>
                            <input type="text" className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="Tên đăng nhập" />
                        </div>
                        <div class="form-group">
                            <label for="password">Mật khẩu</label>
                            <input type="password" class="form-control" name="password" id="password" aria-describedby="helpId" placeholder="Mật khẩu" /> 
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-dark w-25" onClick={this.handleLoginSubmit} disabled={disabledSubmit}>{contentSubmit}</button>
                        </div>
                    </div>

                    <div className="col-md-6 p-5 wow fadeInRightBig" data-wow-duration="1s">
                        <h2>Người Mới? Tạo Tài Khoản</h2>
                        <p>Bằng cách tạo tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể thực hiện 
                            quy trình thanh toán nhanh hơn, lưu trữ nhiều địa chỉ giao hàng, xem và 
                            theo dõi đơn đặt hàng trong tài khoản của bạn và hơn thế nữa.
                        </p>
                        <Link to="/register"><button type="button" class="btn btn-primary">Tạo tài khoản mới</button></Link>
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
        },
        getUserLogin: (user)=>{
            dispatch(actions.getUserLogin(user));
        },
        fetchCartByIdUserRequest:(id)=>{
            dispatch(actions.fetchCartByIdUserRequest(id));
        },
        fetchUserByIdRequest:(id)=>{
            dispatch(actions.fetchUserByIdRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));