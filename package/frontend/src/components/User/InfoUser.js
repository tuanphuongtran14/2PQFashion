import React,{Component,Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from './../../actions'
class InfoUser extends Component {
  render(){
      var {user}=this.props;
      console.log(user);
    return (
        <Fragment>
            <h4 className="text-center mb-4">Tài khoản của tôi</h4>
            <form >
                <div className="row mx-0">   
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-8 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center">
                            <label className="mb-0">Tài khoản của tôi:</label>
                            </div>
                            <div className="col-8 d-flex text-center px-0">
                            <label>{user.username}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                </div>
                <div className="row mx-0">   
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-8 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center">
                            <label className="mb-0">Số điện thoại:</label>
                            </div>
                            <div className="col-8 d-flex text-center px-0">
                            <label>{user.phone}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                </div>
                <div className="row mx-0">   
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-8 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center">
                            <label className="mb-0">Email:</label>
                            </div>
                            <div className="col-8 d-flex text-center px-0">
                            <label>{user.email}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 py-0 text-right px-0">
                    </div> 
                </div>
                <div className="row mx-0">   
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-8 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center">
                            <label className="mb-0">Địa chỉ:</label>
                            </div>
                            <div className="col-8 d-flex text-center px-0">
                            <label>{user.address}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 py-0 text-right px-0">
                    </div> 
                </div>
   
            </form>
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

