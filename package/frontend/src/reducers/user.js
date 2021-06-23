import * as types from'../constants/ActionTypes'
var result=localStorage.getItem('user');
var init_user=result?JSON.parse(result):[];

var initialState={
     id_User: init_user.id_User,
     username:' ',
     phone:' ',
     address:' ',
     email:' ',
};

const user=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_USER_BY_ID:
            return action.user;   
        case types.LOG_OUT:
            
             var newUser={
                id_User:'',
                username:' ',
                phone:' ',
                address:' ',
                email:' ',
            }  
            localStorage.removeItem('user');
            return newUser;       
        default:
            return state;
    }

}
export default user;