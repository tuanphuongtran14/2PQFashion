import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CatogoryManagement from './CategoryManagement';
import AddProduct from './AddProductPage';
import {Helmet} from 'react-helmet'

export default function AdminPage() {
    return (
      <Router>
        <Helmet>
          <title>Admin pages</title>
        </Helmet>
        <div className="container-scroller">
        {/* partial:partials/_navbar.html */}
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="/images/logo.svg" className="mr-2" alt="logo" /></a>
            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="/images/logo-mini.svg" alt="logo" /></a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav navbar-nav-right"> 
              <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                  <img src="/images/faces/face28.jpg" alt="profile" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                  <a className="dropdown-item">
                    <i className="fas fa-user-tie text-primary" />
                    Lê Văn Luyện
                  </a>
                  <a className="dropdown-item">
                    <i className="ti-power-off text-primary" />
                    Logout
                  </a>
                </div>
              </li> 
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="icon-menu" />
            </button>
          </div>
        </nav>
        {/* partial */}
        <div className="container-fluid page-body-wrapper"> 
          {/* partial */}
          {/* partial:partials/_sidebar.html */}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <i className="fas fa-clipboard-list" />
                  <span className="menu-title">&nbsp; Quản lý danh mục</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#product" aria-expanded="false" aria-controls="product">
                  <i className="fas fa-archive" />
                  <span className="menu-title">&nbsp;Quản lý sản phẩm</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="product">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/CRUDpage/listProduct.html">Danh sách sản phẩm </a></li>
                    <li className="nav-item"> <Link className="nav-link" to="/admin/add-product">Thêm sản phẩm </Link></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/CRUDpage/update.html">Sửa sản phẩm </a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#bill" aria-expanded="false" aria-controls="bill">
                  <i className="fas fa-shipping-fast" />
                  <span className="menu-title">&nbsp; Quản lý đơn hàng</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="bill">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/billManagePage/billManage.html">Danh sách đơn hàng</a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/billManagePage/billDetail.html">Chi tiết đơn hàng</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-sign-out-alt" />
                  <span className="menu-title">&nbsp; Đăng xuất</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card page-body">
                  <Switch>
                      <Route exact path={'/admin' || '/admin'}>
                        <CatogoryManagement />
                      </Route>
                      <Route path='/admin/add-product'>
                        <AddProduct />
                      </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
      </Router>
    )
}
