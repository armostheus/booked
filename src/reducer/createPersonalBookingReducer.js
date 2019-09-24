export default (state=[], action) => {
    switch (action.type){
        case 'BUILD_BOOKING':
            return action.payload;
        case 'CREATE_BOOKING':
            return action.payload;
        default :
            return state;
    }
}