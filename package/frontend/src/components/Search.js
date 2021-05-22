import React,{Component,Fragment} from 'react';

class Search extends Component {
  render(){
    return (
        <Fragment>
            {/* <!-- Search Begin --> */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....."/>
                    </form>
                </div>
            </div>
            {/* <!-- Search End --> */}
        </Fragment>
        
    );
  }
  
}

export default Search;
