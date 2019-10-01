export default (state=[{user:"Armostheus", firstName:"Shubham", middleName:"", lastName:"Chakraborty"}], action) => {
    switch(action.type){
        case 'SET_USER':
            return action.payload;
        default:
            return state;
    }
}