export default (state=[], action) => {
    switch(action.type){
        case 'BUILD_EVENT':
            return action.payload;
        case 'CREATE_EVENT':
            return action.payload;
        default:
            return state;
    }
};