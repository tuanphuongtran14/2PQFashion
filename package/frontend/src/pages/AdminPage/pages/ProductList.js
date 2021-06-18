import React, { Component, Fragment } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <h4 className="text-center mb-4">Danh sách sản phẩm</h4>
                <div className="row mx-0">
                    <div className="col-4 px-0">
                        <div className="row form-group px-0 mx-0">
                            <div className="col-3 d-flex align-items-center px-0">
                            <label className="mb-0">SKU:</label>
                            </div>
                            <div className="col-9 d-flex align-items-center px-0">
                            <input type="text" className="form-control" aria-describedby="helpId"  />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center">
                            <label className="mb-0">Tên sản phẩm:</label>
                            </div>
                            <div className="col-8 d-flex align-items-center px-0">
                            <input type="text" className="form-control" aria-describedby="helpId"  />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 py-0 text-right px-0">
                        <button type="submit" className="btn btn-success">Tìm ngay</button>
                    </div>
                </div>
                <div className="product-list mt-3">
                    <table className="table table--custom">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th>STT</th>
                                <th>SKU</th>
                                <th>Tên sản phẩm</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-eye text-primary" aria-hidden="true"></i></button>
                                    <button className="btn"><i className="fa fa-pencil-square-o text-success" aria-hidden="true"></i></button>
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>NIKEEF12345</td>
                                <td>Áo thun thể thao Nike màu trắng</td>
                                <td className="pt-0">
                                    <button className="btn"><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center my-3">Tổng cộng: 30 sản phẩm</div>
            </Fragment>
        )
    }
}
