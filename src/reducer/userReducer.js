export default (state=[{user:"Armostheus", firstName:"Shubham", middleName:"", lastName:"Chakraborty", friendList:[]}], action) => {
    switch(action.type){
        case 'SET_USER':
            return action.payload;
        case 'UPDATE_FRIENDLIST':
            console.log(state)
            return [{user : state[0].user, firstName : state[0].firstName, middleName : state[0].middleName, lastName : state[0].lastName, friendList : action.payload.friendList}];
        default:
            return state;
    }
}