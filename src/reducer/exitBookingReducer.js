export default (state=[], action) => {
    switch(action.type){
        case 'EXIT_BOOKING':
            return action.payload;
        default:
            return state;
    }
}