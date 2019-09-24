export default (state=[], action) => {
    switch(action.type){
        case 'BUILD_GROUP' :
            return action.payload;
        case 'CREATE_GROUP':
            return action.payload;
        default:
            return state;
    }
}