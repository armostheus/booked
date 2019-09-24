export default (state=[], action)=>{
    switch(action.type){
        case 'EVENT_LIST':
            return action.payload;
        case 'SELECTED_EVENT':
            return action.payload;
        case 'EVENT_DETAILS':
            return action.payload;
        default:
            return state;
    }
}