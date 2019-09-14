import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class CreateGroupBooking extends React.Component{

    render(){
        return(
            <div>
                <h3>CreateGroupBooking</h3>
                <br/>
                Date : <DatePicker /><br/>
                Start Time: <DatePicker 
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            /><br/>
                End Time: <DatePicker 
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                <br />
                Booking Title: <input type="text" name="title" /> <button>Event</button>
                <br />
                <input type="radio" id="public" name="visiblity" value="public" checked />
                <label htmlFor="public">Public</label>
                <input type="radio" id="private" name="visiblity" value="private" />
                <label htmlFor="private">Private</label>
                <br />
                Booking Desc: <textarea id="bookingDesc" name="bookingDesc" rows="5">
                                A short description about your booking
                              </textarea>
                <br />
                Want Reminder? :<input type="radio" id="yes" name="reminder" value="yes" checked />
                                <label htmlFor="reminder">Yes</label>
                                <input type="radio" id="no" name="reminder" value="no" />
                                <label htmlFor="reminder">No</label> 
                <br />   
                Reminder Time :  <DatePicker
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                <br/>
                Group Members :  <input type="text" name="title" /> <button>Group</button>
                <br/>
                <button>Book!</button> 


            </div>
        )
    }
}

export default CreateGroupBooking;