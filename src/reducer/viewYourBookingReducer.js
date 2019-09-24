export default (state=[], action)=>{
    switch(action.type){
        case 'SELECT_DATE':
            return action.payload;
        case 'BOOKING_DETAILS':
            return action.payload;
        default:
            return state;
    }
}