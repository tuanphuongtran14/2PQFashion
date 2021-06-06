import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import $ from "jquery";
class Search extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            keyword:''
        }
    }
    onChange=(event)=>
    {
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]:value
        });
        console.log(value);
    }
    onSearch=()=>
    {   

        this.props.onSearch(this.state.keyword);
        $('.search-model').fadeOut(400, function () {
            
        });
    }
  render(){
    const    {keyword}=this.state;
    return (
        <Fragment>
            {/* <!-- Search Begin --> */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input"
                         placeholder="Search here....."
                          name="keyword" value={keyword} 
                          onChange={this.onChange}/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary"
                                type="button"
                                onClick={this.onSearch}>
                                <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                        </span>
                    </form>
                </div>
            </div>
            {/* <!-- Search End --> */}
        </Fragment>
        
    );
  }
  
}


export default Search;
