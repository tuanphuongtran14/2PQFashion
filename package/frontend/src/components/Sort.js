import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import $ from "jquery";
class Sort extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            status:0
        }
    }

    onChange=(event)=>
    {
        var target=event.target;
        var name=target.name;
        var value=target.value;
        console.log(value);
        this.props.onSort(value);
        this.setState({
            [name]:value
        });
        

    }
  render(){
    const    {status}=this.state;
    return (
        <Fragment>
            {/* <!-- Sort Begin --> */}
            <div className="shop__product__option__right">
                <p>Sort by Price:</p>
                <select style={{width:'150px', fontSize:'15px'}} className="custom-select"
                     name='status' 
                     value={this.state.status}
                     onChange={this.onChange}>
                    <option value="0">-Sort-</option>
                    <option value="1">Low To High</option>
                    <option value="2">High To Low</option>
                    <option value="3">$0 - $100</option>
                    <option value="4"> over $100</option>
                </select>
            </div>
            {/* <!-- Sort End --> */}
        </Fragment>
        
    );
  }
  
}


export default Sort;
