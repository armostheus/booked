export default (state=[], action) => {
    switch(action.type) {
        case 'GET_GROUP_SCHEDULE':
            return action.payload;
        case 'SELECT_GROUP':
            return action.payload;
        default : 
            return state;
    }
}