export default (state=[], action)=>{
    switch(action.type){
        case 'SELECT_FRIEND':
            return action.payload;
        case 'FRIEND_DETAILS':
            return action.payload;
        default:
            return state;
    }
}