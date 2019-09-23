import React from 'react'
import Calendar from 'react-calendar'
import './Home.css'
import {Link} from 'react-router-dom'

import HomeBookingList from '../list/HomeBookingList'
import { MonthData } from '../../../mock-data/MockHomeData'
/* import Calendar from 'react-calendar/dist/entry.nostyle'
 */

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : MonthData,
            dateSelelcted : new Date("1971-01-01")
        }
        this.changeDate = this.changeDate.bind(this);
    }

    changeDate(date){
        this.setState({dateSelelcted:date});
    }

    render(){
        return(
            <div>
                <h3>
                    Hi {'{username}'}! here's your calendar.
                </h3>
                <Calendar 
                    tileClassName={
                        ({ date, view }) => {
                            let dateArray = this.state.data.map(dat => dat.date.getDate());
                                {/* if (view === 'month' && date.getDate() === 3 && date.getMonth() === 8){ */}
                                if (view === 'month' && dateArray.includes(date.getDate()) && date.getMonth() === 8){
                                    return  'wednesday'
                                } else {
                                    return null
                                }
                            }    
                        }
                    onChange={this.changeDate}
                />
                <br/>
                {
                    this.state.data.map(dat => {
                        if(dat.date.getDate() === this.state.dateSelelcted.getDate() && dat.date.getMonth() === this.state.dateSelelcted.getMonth()){
                            return(
                                <HomeBookingList key={dat.id} data={dat}/>
                            )
                        }
                    })
                }
                <div className="flex-container">
                    <button className="flex-content"><Link to="/PersonalBooking">Create Personal Booking</Link></button>
                    <button className="flex-content"><Link to="/GroupBooking">Create Group Booking</Link></button>
                </div>
                <div className="flex-container">
                    <button className="flex-content"><Link to="/ExitBooking">Exit Booking</Link></button>
                    <button className="flex-content"><Link to="/ViewBooking">View Your Booking</Link></button>
                </div>
                <div className="flex-container">
                    <button className="flex-content"><Link to="/CreateEvent">Create Event</Link></button>
                    <button className="flex-content"><Link to="/ViewEvents">View Your Events</Link></button>
                </div>
                <div className="flex-container">
                    <button className="flex-content"><Link to="/CreateGroup">Create Group</Link></button>
                    <button className="flex-content"><Link to="/ViewGroup">View Group</Link></button>
                </div>
                <div className="flex-container">
                    <button className="flex-content"><Link to="/AddFriend">Add Friend</Link></button>
                    <button className="flex-content"><Link to="/ViewFriend">View Friend</Link></button>
                </div>
                <div className="flex-container">
                    <button className="flex-content"><Link to="/FriendsAvailable">View Friend's Availability</Link></button>
                    <button className="flex-content"><Link to="/GroupsAvailable">View Group's Availability</Link></button>
                </div>
            </div>
        )
    }
}

export default Home;