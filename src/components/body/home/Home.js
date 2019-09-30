import React from 'react'
import Calendar from 'react-calendar'
import './Home.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


import HomeBookingList from '../list/HomeBookingList'
import { MonthData } from '../../../mock-data/MockHomeData'
/* import Calendar from 'react-calendar/dist/entry.nostyle'
 */

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dateSelelcted : new Date(Date.now()),
            dateArray : []
        }
        this.changeDate = this.changeDate.bind(this);
    }

    componentDidMount(){
        let dateArray = this.props.metadata.bookings.map(dat => {
            let dt = new Date(dat.date);
            if(dt.getMonth() === this.props.metadata.currentMonth)
                return dt.getDate()
        });
        this.setState({dateArray:dateArray})
    }

    changeDate(date){
        if(date.getMonth !== this.state.dateSelelcted.getMonth()){
            let dateArray = this.props.metadata.bookings.map(dat => {
                let dt = new Date(dat.date);
                if(dt.getMonth() === date.getMonth())
                    return dt.getDate()
            });
            this.setState({dateArray:dateArray});
        }
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
                            if(this.props.metadata.bookings){
                                let dateArray = this.props.metadata.bookings.map(dat => {
                                    let dt = new Date(dat.date);
                                    if(dt.getMonth() === date.getMonth())
                                        return dt.getDate()
                                });
                                {/* if (view === 'month' && date.getDate() === 3 && date.getMonth() === 8){ */}
                                if (view === 'month' && this.state.dateArray.includes(date.getDate()) && date.getMonth() === this.state.dateSelelcted.getMonth()){
                                    return  'wednesday'
                                } else {
                                    return null
                                }
                            } 
                            return null
                        }
                               
                    }
                    activeStartDate={this.state.dateSelelcted}
                    onChange={this.changeDate}
                    nextLabel={console.log('view Changed')}
                />
                <br/>
                {
                    this.props.metadata.bookings ? 
                        this.props.metadata.bookings.map(dat => {
                            let dt = new Date(dat.date)
                            if(dt.getDate() === this.state.dateSelelcted.getDate() && dt.getMonth() === this.state.dateSelelcted.getMonth()){
                                return(
                                    <HomeBookingList key={dat._id} data={dat}/>
                                )
                            }
                        }) : null
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

const mapStateToProps = (state) => {
    return {
        metadata:state.metadata
    }
}

export default connect(mapStateToProps)(Home);