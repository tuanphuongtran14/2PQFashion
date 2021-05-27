import * as types from'./../constants/ActionTypes'


var initialState='';
const search=(state=initialState,action)=>{
    switch(action.type){
        case types.SEARCH:
           console.log(action.keyword);
            return action.keyword;
        
        default:
            return state;
    }

}
export default search;