export default (state=[{user:"Armostheus", firstName:"Shubham", middleName:"", lastName:"Chakraborty"}], action) => {
    switch(action.type){
        case 'SET_USER':
            return action.payload;
        case 'UPDATE_FRIENDLIST':
            return state[0].friendList = action.payload;
        default:
            return state;
    }
}