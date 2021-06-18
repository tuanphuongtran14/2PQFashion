import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import callApi from '../../../utils/apiCaller';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            categories: []
        }
    }

    componentDidMount() {
        callApi('categories', 'GET')
            .then(res => {
                if (res && res.status === 200) {
                    this.setState({
                        categories: res.data,
                        loading: false
                    })
                }
            })
    }

    displayLoading = () => {
        if (this.state.loading) {
            return (
                <div className="loading">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    }

    deleteCategory = (event, id) => {
        event.preventDefault();
        if (window.confirm("Bạn có chắc muốn xóa danh mục này?")) {
            this.setState({
                loading: true
            });
            callApi(`categories/${id}`, 'DELETE')
                .then(res => {
                    if (res && res.status === 200) {
                        // Fetch new data
                        callApi('categories', 'GET')
                            .then(res => {
                                if (res && res.status === 200) {
                                    this.setState({
                                        categories: res.data
                                    })
                                }
                                alert("Đã xóa thành công!!!");
                                this.setState({
                                    loading: false
                                });
                            })
                    } else {
                        alert("Xóa thất bại, vui lòng thử lại sau!!!");
                    }
                })
        }
    }

    editCategory = (event, id) => {
        event.preventDefault();
        console.log(this.props.history);
        this.props.history.push(`/admin/sua-danh-muc?id=${id}`)
    }

    viewCategory = (event, id) => {
        event.preventDefault();
        console.log(this.props.history);
        this.props.history.push(`/admin/danh-muc?id=${id}`)
    }

    render() {
        const categoryList = this.state.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{(index + 1).toString().padStart(2, 0)}</td>
                    <td>{category.name}</td>
                    <td>{category.slug}</td>
                    <td className="pt-0 text-center">
                        <button className="btn" onClick={(event) => this.viewCategory(event, category._id)}><i className="fa fa-eye text-primary" aria-hidden="true"></i></button>
                        <button className="btn" onClick={(event) => this.editCategory(event, category._id)}><i className="fa fa-pencil-square-o text-success" aria-hidden="true"></i></button>
                        <button className="btn" onClick={(event) => this.deleteCategory(event, category._id)}><i className="fa fa-trash text-danger" aria-hidden="true"></i></button>
                    </td>
                </tr>
            )
        })
        return (
            <Fragment>
                <h4 className="text-center mb-4">Danh sách danh mục</h4>
                <div className="category-list mt-3">
                    <table className="table table--custom">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th>STT</th>
                                <th>Tên danh mục</th>
                                <th>Đường dẫn</th>
                                <th className="text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryList}
                        </tbody>
                    </table>
                </div>
                <div className="text-center my-3">Tổng cộng: 10 danh mục</div>
                { this.displayLoading() }
            </Fragment>
        )
    }
}

export default withRouter(ProductList);