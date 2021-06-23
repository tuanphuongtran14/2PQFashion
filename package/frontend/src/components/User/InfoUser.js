import React,{Component,Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
class InfoUser extends Component {
  render(){
      var {user}=this.props;
      console.log(user);
    return (
        <Fragment>
            <h4 className="text-center mb-4">Tài khoản của tôi</h4>
                <div className="row mx-0">   
                    <div className="col-3 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-6 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-6 d-flex align-items-center">
                            <label >Tài khoản của tôi:</label>
                            </div>
                            <div className="col-6 d-flex text-center px-0">
                            <label className="text-info">{user.username}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 py-0 text-right px-0">
                        
                    </div> 
                </div>
                <div className="row mx-0">   
                    <div className="col-3 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-6 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-6 d-flex align-items-center">
                            <label >Số điện thoại:</label>
                            </div>
                            <div className="col-6 d-flex text-center px-0">
                            <label className="text-info">{user.phone}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 py-0 text-right px-0">
                        
                    </div> 
                </div>
                <div className="row mx-0">   
                    <div className="col-3 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-6 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-6 d-flex align-items-center">
                            <label >Email:</label>
                            </div>
                            <div className="col-6 d-flex text-center px-0">
                            <label className="text-info">{user.email}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 py-0 text-right px-0">
                    </div> 
                </div>
                <div className="row mx-0">   
                    <div className="col-3 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-6 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-6 d-flex align-items-center">
                            <label >Địa chỉ:</label>
                            </div>
                            <div className="col-6 d-flex text-center px-0">
                            <label className="text-info">{user.address}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 py-0 text-right px-0">
                    </div> 
                </div>
                <div className="row mx-0">   

                    <div className="col-12 px-0 text-center mt-5">
                        <Link to={'/user/change-pasword'} className="btn btn-info">Thay đổi mật khẩu</Link>
                    </div>

                </div>
        </Fragment>
        
    );
  }
  
}

const mapStateToProps=(state)=>{
    return {
        user:state.user,
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {

        }
    }
  export default connect(mapStateToProps,mapDispatchToProps)(InfoUser);

