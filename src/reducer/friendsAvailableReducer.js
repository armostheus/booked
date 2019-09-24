export default (state=[], action) => {
    switch(action.type){
        case 'GET_FRIENDS_SCHEDULE':
            return action.payload;
        default:
            return state;
    }
}