import React from 'react'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux';
import './CreatePersonalBooking.css'
import { fetchYearBookings } from '../../../actions/index'

import "react-datepicker/dist/react-datepicker.css";

/* 
Pending Implementation
1. displaying a list of events when clicked on event button
2. Selecting an event from that list
3. Auto populating event details in the component
*/

class CreatePersonalBooking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                user: this.props.user[0].user,
                date : undefined,
                startTime : undefined,
                endTime : undefined,
                title : undefined,
                private : false,
                description : undefined,
                reminder : false,
                reminderTime : new Date(Date.now()),
                freeze : false,
                booked : false
            }
        this.nullState = {
            user: this.props.user[0].user,
            date : undefined,
            startTime : undefined,
            endTime : undefined,
            title : undefined,
            private : false,
            description : undefined,
            reminder : false,
            reminderTime : undefined,
        }
        this.setData = this.setData.bind(this);
        this.bookItBabe = this.bookItBabe.bind(this);
    }

    setData(prp){
        this.setState(prp);
    }


    bookItBabe(){
        //Freeze the UI here
            this.setState({freeze : true})
        ////////////
        //Implement axios call to backend here
        let time = [this.state.startTime, this.state.endTime, this.state.reminderTime]
        time[0].setFullYear(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate())
        time[1].setFullYear(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate())
        time[2].setFullYear(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate())
        let data = {
            private:this.state.private,
            user:this.props.user[0].user,
            date:this.state.date,
            startTime:time[0],
            endTime:time[0],
            title:this.state.title,
            description:this.state.description,
            reminder:this.state.reminder,
            reminderTime:time[0]
        }
        fetch("http://localhost:3100/create/personalBooking",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            this.props.fetchYearBookings();
            //Reset the state.
            this.setState({...this.nullState})
            //Show the modal for 10 seconds.
            this.setState({freeze : false, booked : true})
            setTimeout(() => { this.setState({booked : false}) }, 10000);
        })
    }

    render(){
        return(
            <React.Fragment>
            <div className={`${this.state.freeze ? 'freeze' : ''}`}>
                <h3>CreatePersonalBooking</h3>
                Date : <DatePicker 
                        selected={this.state.date}
                        onChange={date => this.setData({date:date})}
                    /><br/>
                Start Time: <DatePicker 
                                selected={this.state.startTime}
                                onChange={date => this.setData({startTime:date})}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            /><br/>
                End Time: <DatePicker 
                                selected={this.state.endTime}
                                onChange={date => this.setData({endTime:date})}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                <br />
                {/*Implement Throttling for booking title*/}
                Booking Title: <input type="text" name="title" value={this.state.title} onChange={(e)=>this.setData({title:e.target.value})}/> <button>Event</button>
                <br />
                <input type="radio" id="public" name="visiblity" value="public" checked={!this.state.private} onChange={()=>this.setData({private:false})}/>
                <label htmlFor="public">Public</label>
                <input type="radio" id="private" name="visiblity" value="private" checked={this.state.private} onChange={()=>this.setData({private:true})}/>
                <label htmlFor="private">Private</label>
                <br />
                Booking Desc: <textarea id="bookingDesc" name="bookingDesc" rows="5"
                                placeholder="A short description about your booking"
                                value={this.state.description}
                                onChange={(e)=>this.setData({description:e.target.value})}
                                >
                              </textarea>
                <br />
                Want Reminder? :<input type="radio" id="yes" name="reminder" value="yes" checked={this.state.reminder} onChange={(e)=>this.setData({reminder:true})}/>
                                <label htmlFor="reminder">Yes</label>
                                <input type="radio" id="no" name="reminder" value="no" checked={!this.state.reminder} onChange={(e)=>this.setData({reminder:false})}/>
                                <label htmlFor="reminder">No</label> 
                <br />   
                Reminder Time :  <DatePicker
                                    showTimeSelect
                                    showTimeSelectOnly
                                    disabled={!this.state.reminder}
                                    selected={this.state.reminderTime}
                                    onChange={data=>this.setData({reminderTime:data})}
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="h:mm aa"
                                    />
                <br/>
                <button onClick={this.bookItBabe}>Book!</button>         
            </div>
            <div className={`${this.state.freeze ? 'show-loading' : 'no-loading'}`}>
                Loading
            </div>
            <div className={`${this.state.booked ? 'show-modal' : 'no-modal'}`}>
                Booking has been added!
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchYearBookings})(CreatePersonalBooking);