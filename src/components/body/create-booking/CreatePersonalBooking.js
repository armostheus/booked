import React from 'react'
import DatePicker from 'react-datepicker'

class CreatePersonalBooking extends React.Component{

    render(){
        return(
            <div>
                <h3>CreatePersonalBooking</h3>
                Date : <input type="date" name="booking"></input>
            </div>
        )
    }
}

export default CreatePersonalBooking;