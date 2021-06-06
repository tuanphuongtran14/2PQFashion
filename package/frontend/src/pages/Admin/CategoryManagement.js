import React, { Component } from 'react'

export default class CategoryManagement extends Component {
    render() {
        return (
            <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Quản lý danh mục</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr> 
                              <th>
                                Số thứ tự
                              </th>
                              <th>
                                Tên danh mục
                              </th>
                              <th>
                                Thẻ
                              </th> 
                              <th>
                                Số lượng
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr> 
                              <td>
                                1
                              </td>
                              <td>
                                Áo thun
                              </td>
                              <td>
                                Áo ngắn tay, Áo dài tay, Áo cộc tay
                              </td>
                              <td>
                                20
                              </td>
                            </tr>
                            <tr> 
                              <td>
                                2
                              </td>
                              <td>
                                Sơ mi
                              </td>
                              <td>
                                Sơ mi caro, Sơ mi hoạ tiết, Sơ mi tay dài
                              </td>
                              <td>
                                30
                              </td>
                            </tr>
                            <tr> 
                              <td>
                                3
                              </td>
                              <td>
                                Quần
                              </td>
                              <td>
                                Quần short, Quần tây, Quần jean
                              </td>
                              <td>
                                10
                              </td>
                            </tr>
                            <tr> 
                              <td>
                                4
                              </td>
                              <td>
                                Váy
                              </td>
                              <td>
                                Váy ngắn, Váy suông, Váy chữ A
                              </td>
                              <td>
                                10
                              </td>
                            </tr>
                            <tr> 
                              <td>
                                5
                              </td>
                              <td>
                                Đầm
                              </td>
                              <td>
                                Đầm hở vai, Đầm công sở
                              </td>
                              <td>
                                15
                              </td>
                            </tr>
                            <tr> 
                              <td>
                                Nón
                              </td>
                              <td>
                                M6
                              </td>
                              <td>
                                Nón lưỡi trai, Nón len, Nón HipHop
                              </td>
                              <td>
                                5
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
        )
    }
}
