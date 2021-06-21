import React,{Component,Fragment} from 'react';
import { Link } from 'react-router-dom';

class Logut extends Component {
  render(){
    return (
        <Fragment>
            <h4 className="text-center mb-4">Đăng xuất</h4>
            <form >
                <div className="row mx-0">   
                    <div className="col-2 py-0 text-right px-0">
                        
                    </div> 
                    <div className="col-8 px-0 text-center">
                        <h4>Xin chào: Tống Đình Quốc</h4>
                        {/* <div className="row form-group mx-0">
                            <div className="col-4 d-flex align-items-center text-right">
                                <label className="mb-0">Xin chào:</label>
                            </div>
                            <div className="col-8 d-flex align-items-center px-0">
                                <label className="mb-0">Tống Đình Quốc</label>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-2 py-0 text-right px-0"> 
                    </div> 
                </div>
                <div className="row mx-0">
                    <div className="col-4 py-0 text-right px-0">
                        
                    </div>       
                    <div className="col-4 py-0 text-center px-0">
                        <button type="submit" className="btn btn-success">Đăng xuất</button>
                    </div>
                    <div className="col-4 py-0 text-right px-0">
                        
                    </div>    
                </div>     
            </form>
        </Fragment>
        
    );
  }
  
}

export default Logut;
