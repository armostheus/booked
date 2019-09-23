import React from 'react'
import {Route, Link} from "react-router-dom"

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
                <Route exact path="/" component={Home} />
                <Route exact path="/PersonalBooking" component={CreatePersonalBooking} />
                <Route exact path="/GroupBooking" component={CreateGroupBooking} />
                <Route exact path="/ExitBooking" component={ExitBooking} />
                <Route exact path="/ViewBooking" component={ViewBooking} />
                <Route exact path="/CreateEvent" component={CreateEvent} />
                <Route exact path="/ViewEvents" component={ViewEvents} />
                <Route exact path="/CreateGroup" component={CreateGroup} />
                <Route exact path="/ViewGroup" component={ViewGroup} />
                <Route exact path="/AddFriend" component={AddFriend} />
                <Route exact path="/ViewFriend" component={ViewFriend} />
                <Route exact path="/FriendsAvailable" component={ViewOthersAvailability} />
                <Route exact path="/GroupsAvailable" component={ViewGroupsAvailability} />
                {/* <Home />
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
                <hr /> */}
            </div>
        )
    }
}

export default Body;