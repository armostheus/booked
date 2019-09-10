import React from 'react'
import Calendar from 'react-calendar'
import './Home.css'

import HomeBookingList from '../list/HomeBookingList'
/* import Calendar from 'react-calendar/dist/entry.nostyle'
 */

class Home extends React.Component{
    render(){
        return(
            <div>
                <h3>
                    Hi {'{username}'}! here's your calendar.
                </h3>
                <Calendar tileClassName={
                    ({ date, view }) => view === 'month' && date.getDate() === 3 && date.getMonth() === 8 ? 'wednesday' : null    
                }
                />
                <br/>
                <HomeBookingList />
                <div className="flex-container">
                    <button className="flex-content">Create Personal Booking</button>
                    <button className="flex-content">Create Group Booking</button>
                </div>
                <div className="flex-container">
                    <button className="flex-content">Exit Booking</button>
                    <button className="flex-content">View Your Booking</button>
                </div>
                <div className="flex-container">
                    <button className="flex-content">Create Event</button>
                    <button className="flex-content">View Your Events</button>
                </div>
                <div className="flex-container">
                    <button className="flex-content">Create Group</button>
                    <button className="flex-content">View Group</button>
                </div>
                <div className="flex-container">
                    <button className="flex-content">Add Friend</button>
                    <button className="flex-content">View Friend</button>
                </div>
                <div className="flex-container">
                    <button className="flex-content">View Friend's Availability</button>
                    <button className="flex-content">View Group's Availability</button>
                </div>
            </div>
        )
    }
}

export default Home;