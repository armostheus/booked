import { combineReducers } from 'redux';
import userReducer from './userReducer'
import metadataReducer from './metadataReducer'
import addFriendReducer from './addFriendReducer'
import createEventReducer from './createEventReducer'
import createGroupBookingReducer from './createGroupBookingReducer'
import createGroupReducer from './createGroupReducer'
import createPersonalBookingReducer from './createPersonalBookingReducer'
import exitBookingReducer from './exitBookingReducer'
import friendsAvailableReducer from './friendsAvailableReducer'
import groupAvailableReducer from './groupAvailableReducer'
import viewFriendReducer from './viewFriendReducer'
import viewGroupReducer from './viewGroupReducer'
import viewYourBookingReducer from './viewYourBookingReducer'
import viewYourEventsReducer from './viewYourEventsReducer'

export default combineReducers({
    user : userReducer,
    metadata : metadataReducer,
    addFriend : addFriendReducer,
    createEvent : createEventReducer,
    createGroupBooking : createGroupBookingReducer,
    createGroup : createGroupReducer,
    createPersonalBooking : createPersonalBookingReducer,
    exitBooking : exitBookingReducer,
    friendsAvailable : friendsAvailableReducer,
    groupAvailable : groupAvailableReducer,
    viewFriend : viewFriendReducer,
    viewGroup : viewGroupReducer,
    viewYourBooking : viewYourBookingReducer,
    viewYourEvents : viewYourEventsReducer
})