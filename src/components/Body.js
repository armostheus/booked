import React from 'react'

import Home from './body/home/Home'
import CreatePersonalBooking from './body/create-booking/CreatePersonalBooking'
import CreateGroupBooking from './body/create-booking/CreateGroupBooking'
import ExitBooking from './body/update-booking/ExitBooking'
import ViewBooking from './body/update-booking/ViewBooking'
import CreateEvent from './body/event/CreateEvent'
import ViewEvents from './body/event/ViewEvents'
import CreateGroup from './body/group/CreateGroup'
import ViewGroup from './body/group/ViewGroup'
import AddFriend from './body/friend/AddFriend'
import ViewFriend from './body/friend/ViewFriend'
import ViewOthersAvailability from './body/availability/ViewOthersAvailability'
import ViewGroupsAvailability from './body/availability/ViewGroupAvailability'

class Body extends React.Component{
    render(){
        return(
            <div>
                <Home />
                <hr />
                <CreatePersonalBooking />
                <hr />
                <CreateGroupBooking />
                <hr />
                <ExitBooking />
                <hr />
                <ViewBooking />
                <hr />
                <CreateEvent />
                <hr />
                <ViewEvents />
                <hr />
                <CreateGroup />
                <hr />
                <ViewGroup />
                <hr />
                <AddFriend />
                <hr />
                <ViewFriend />
                <hr />
                <ViewOthersAvailability />
                <hr />
                <ViewGroupsAvailability />
                <hr />
            </div>
        )
    }
}

export default Body;