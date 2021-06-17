import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import $ from "jquery";
class FilterName extends Component {
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
            {/* <!-- Filter Begin --> */}
            <form action="#">
                <input type="text" placeholder="Search..." name="keyword" value={keyword} 
                          onChange={this.onChange}/>
                <button  type="button"  onClick={this.onSearch}><span className="icon_search"></span></button>
            </form>
            {/* <!-- Filter End --> */}
        </Fragment>
        
    );
  }
  
}


export default FilterName;
