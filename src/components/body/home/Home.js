import React from 'react'
import Calendar from 'react-calendar'
import './Home.css'

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
                        console.log(dat.date + '===' + this.state.dateSelelcted)
                        if(dat.date.getDate() === this.state.dateSelelcted.getDate() && dat.date.getMonth() === this.state.dateSelelcted.getMonth()){
                            return(
                                <HomeBookingList data={dat}/>
                            )
                        }
                    })
                }
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