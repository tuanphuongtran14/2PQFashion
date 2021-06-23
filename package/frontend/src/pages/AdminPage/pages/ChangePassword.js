import React,{Component,Fragment} from 'react';
import axios from 'axios';
import { handleInputChange } from 'react-select/src/utils';

class ChangePassword extends Component {
    handleSubmit = event => {
          event.preventDefault();
          axios({
              method: 'PUT',
              url: `/api/users/${JSON.parse(localStorage.getItem('user')).id_User}`,
              data: {
                  
              }
          })
    }
  render(){
    return (
        <Fragment>
            <h4 className="text-center mb-4">Thay đổi mật khẩu</h4>
            <form >
                <div className="row mx-0">   
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-8 px-0">
                        <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center">
                            <label className="mb-0">Tài khoản*:</label>
                            </div>
                            <div className="col-8 d-flex align-items-center px-0">
                            <input type="text" className="form-control" aria-describedby="helpId"  />
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
                            <label className="mb-0">Mật khẩu cũ*:</label>
                            </div>
                            <div className="col-8 d-flex align-items-center px-0">
                            <input type="text" className="form-control" aria-describedby="helpId"  />
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
                            <label className="mb-0">Mật khẩu mới*:</label>
                            </div>
                            <div className="col-8 d-flex align-items-center px-0">
                            <input type="text" className="form-control" aria-describedby="helpId"  />
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
                            <label className="mb-0">Xác nhận mật khẩu*:</label>
                            </div>
                            <div className="col-8 d-flex align-items-center px-0">
                            <input type="text" className="form-control" aria-describedby="helpId"  />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 py-0 text-right px-0">
                    </div> 
                </div>
                <div className="row mx-0">
                    <div className="col-4 py-0 text-right px-0">
                        
                    </div>       
                    <div className="col-4 py-0 text-center px-0">
                        <button type="submit" className="btn btn-success">Đổi mật khẩu</button>
                    </div>
                    <div className="col-4 py-0 text-right px-0">
                        
                    </div>    
                </div>     
            </form>
        </Fragment>
        
    );
  }
  
}

export default ChangePassword;
