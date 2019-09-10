import React from 'react'
import Calendar from 'react-calendar'
import './Home.css'
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
                <button>Create Personal Booking</button>
                <button>Create Group Booking</button>
                <button>Exit Booking</button>
                <button>View Your Booking</button>
                <button>Create Event</button>
                <button>View Your Events</button>
                <button>Create Group</button>
                <button>View Group</button>
                <button>Add Friend</button>
                <button>View Friend</button>
                <button>View Friend's Availability</button>
                <button>View Group's Availability</button>
            </div>
        )
    }
}

export default Home;