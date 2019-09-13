import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class CreatePersonalBooking extends React.Component{

    render(){
        return(
            <div>
                <h3>CreatePersonalBooking</h3>
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
            </div>
        )
    }
}

export default CreatePersonalBooking;