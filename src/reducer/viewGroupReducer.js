export default (state=[], action)=>{
    switch(action.type){
        case 'SELECTED_GROUP':
            return action.payload;
        case 'GROUP_DETAILS':
            return action.payload;
        default:
            return state;
    }
}