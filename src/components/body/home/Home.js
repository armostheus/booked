import React from 'react'
import Calendar from 'react-calendar'
import './Home.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


import HomeBookingList from '../list/HomeBookingList'
/*import { MonthData } from '../../../mock-data/MockHomeData'
 import Calendar from 'react-calendar/dist/entry.nostyle'
 */

const NextIcon = (props) =>{
        return(
            <div onClick={props.setNextMonthActive}>›</div>    
        )
}

const PrevIcon = (props) => {
    return(
        <div onClick={props.setPrevMonthActive}>‹</div>    
    )
}

class Home extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            dateSelelcted : new Date(Date.now()),
            dateArray : []
        }
        this.changeDate = this.changeDate.bind(this);
        this.setNextMonthActive = this.setNextMonthActive.bind(this);
        this.setPrevMonthActive = this.setPrevMonthActive.bind(this);
    }

    componentDidUpdate(prevProps){
        if(prevProps.metadata.bookings.length===0 && this.state.dateArray.length ===0){
            let dateArray = this.props.metadata.bookings.map(dat => {
                let dt = new Date(dat.date);
                if(dt.getMonth() === this.props.metadata.currentMonth)
                    return dt.getDate()
            });
            if(JSON.stringify(this.state.dateArray) !== JSON.stringify(dateArray)){
                this.setState({dateArray:dateArray})
            }
        }
    }

    changeDate(date){
        if(date.getMonth !== this.state.dateSelelcted.getMonth()){
            let dateArray = this.props.metadata.bookings.map(dat => {
                let dt = new Date(dat.date);
                if(dt.getMonth() === date.getMonth())
                    return dt.getDate()
            });
            this.setState({dateArray:dateArray});
            this.setState({dateSelelcted:date});
        }
        this.setState({dateSelelcted:date});
    }

    componentWillMount(){
        if(this.props.metadata.bookings.length>0){
            let current = new Date(Date.now());
            if(current.getMonth !== this.state.dateSelelcted.getMonth()){
                let dateArray = this.props.metadata.bookings.map(dat => {
                    let dt = new Date(dat.date);
                    if(dt.getMonth() === current.getMonth())
                        return dt.getDate()
                });
                this.setState({dateArray:dateArray});
            }
            this.setState({dateSelelcted : current});
        }
    }

    setNextMonthActive(){
        let date = this.state.dateSelelcted;
        let current = null;
        if(date.getMonth()===11){
            current = new Date(date.getFullYear() + 1, 0, 1);
            //fetchDataFor next year
        } else {
            current = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        }
        if(current.getMonth !== this.state.dateSelelcted.getMonth()){
            let dateArray = this.props.metadata.bookings.map(dat => {
                let dt = new Date(dat.date);
                if(dt.getMonth() === current.getMonth())
                    return dt.getDate()
            });
            this.setState({dateArray:dateArray});
        }
        this.setState({dateSelelcted : current});
    }

    setPrevMonthActive(){
        let date = this.state.dateSelelcted;
        let current = null;
        if(date.getMonth()===0){
            current = new Date(date.getFullYear() - 1, 11, 1);
            //fetchDataFor next year
        } else {
            current = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        }
        if(current.getMonth !== this.state.dateSelelcted.getMonth()){
            let dateArray = this.props.metadata.bookings.map(dat => {
                let dt = new Date(dat.date);
                if(dt.getMonth() === current.getMonth())
                    return dt.getDate()
            });
            this.setState({dateArray:dateArray});
        }
        this.setState({dateSelelcted : current});
    }


    render(){
        return(
            <div>
                <h3>
                    Hi {this.props.user[0].firstName}! here's your calendar.
                </h3>
                <Calendar 
                    tileClassName={
                        ({ date, view }) => {
                                if (view === 'month' && this.state.dateArray.includes(date.getDate()) && date.getMonth() === this.state.dateSelelcted.getMonth()){
                                    return  'booking'
                                } else {
                                    return null
                                }
                        }
                               
                    }
                    onChange={this.changeDate}
                    onClickMonth={(value)=> this.changeDate(value)}
                    value={this.state.dateSelelcted}
                    nextLabel={<NextIcon setNextMonthActive={this.setNextMonthActive}/>}
                    prevLabel={<PrevIcon setPrevMonthActive={this.setPrevMonthActive}/>}
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
        metadata:state.metadata,
        user:state.user
    }
}

export default connect(mapStateToProps)(Home);