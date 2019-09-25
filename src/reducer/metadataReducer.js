export default (state=[], action) => {
    switch(action.type){
        case 'SET_DATE':
            return action.payload;
        case 'SET_BOOKING':
            console.log({...state, ...action.payload});
            return {...state, ...action.payload};
        default:
            return state;
    }
}