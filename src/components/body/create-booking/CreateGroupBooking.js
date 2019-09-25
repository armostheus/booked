import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

/*
Pending Implementation:
1. Adding members in group
2. Fetching Group
3. Removing a group member mistakenly added
*/

class CreateGroupBooking extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:null,
            startTime:null,
            endTime:null,
            title:null,
            private:false,
            description:null,
            reminder:false,
            reminderTime:null,
            groupMembers:[]
        }
        this.setData = this.setData.bind(this);
        this.bookItBabe = this.bookItBabe.bind(this);
    }

    setData(prp){
        this.setState(prp);
    }

    bookItBabe(){
        console.log(this.state);
        //Implement axios call to backend here
    }

    render(){
        return(
            <div>
                <h3>CreateGroupBooking</h3>
                <br/>
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
                Booking Title: <input type="text" name="title"  value={this.state.title} onChange={(e)=>this.setData({title:e.target.value})}/> <button>Event</button>
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
                                A short description about your booking
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
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                <br/>
                Group Members :  <input type="text" name="title" /> <button>Group</button>
                <br/>
                <button onClick={this.bookItBabe}>Book!</button>  


            </div>
        )
    }
}

export default CreateGroupBooking;