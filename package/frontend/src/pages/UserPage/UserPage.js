import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import './theme/style.css'


export default class MainPage extends Component {
    render() {
        return (
            <Router>
                <Helmet>
                    <title>Admin Page</title>
                </Helmet>
                <div className="body">
                <div className="container d-flex align-items-stretch shadow-lg px-0">
                    <nav id="sidebar">
                        <div className="p-4">
                            <h2 className="text-center text-white"><Link to="/admin">Admin Panel</Link></h2>
                            <ul className="list-unstyled components mb-5">
                                <li>
                                    <a href="#accountSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-user-circle mr-2" aria-hidden="true"></i> Tuấn Phương</a>
                                    <ul className="collapse list-unstyled" id="accountSubmenu">
                                        <li>
                                            <Link to="/them-san-pham">Thay đổi mật khẩu</Link>
                                        </li>
                                        <li>
                                            <Link to="">Đăng xuất</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="active">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Quản lý sản phẩm</a>
                                    <ul className="collapse list-unstyled" id="homeSubmenu">
                                        <li>
                                            <Link to="/admin/xem-san-pham">Danh sách sản phẩm</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/them-san-pham">Thêm sản phẩm</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#categorySubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Quản lý danh mục</a>
                                    <ul className="collapse list-unstyled" id="categorySubmenu">
                                        <li>
                                            <Link to="/admin/xem-danh-muc">Danh sách danh mục</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/them-danh-muc">Thêm danh mục</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Page Content  */}
                    {/* <div id="content" className="p-4 bg-white">
                        <Route path={'/admin/xem-san-pham'} component={ProductList} />
                        <Route path={'/admin/xem-danh-muc'} component={CategoryList} />
                        <Route path={'/admin/them-san-pham'} component={AddProduct} />
                        <Route path={'/admin/them-danh-muc'} component={AddCategory} />
                        <Route path={'/admin/sua-danh-muc'} component={EditCategory} />
                        <Route path={'/admin/danh-muc'} component={ViewCategory} />
                        <Route path={'/admin/san-pham'} component={ViewProduct} />
                    </div> */}
                </div>
                </div>
            </Router>
        )
    }
}
