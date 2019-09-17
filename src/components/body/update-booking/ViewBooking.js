import React from 'react'

class ViewBooking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            yourBooking : null,
            othersBooking : null,
            requests : null
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3>ViewBooking</h3>
                    <button>Your Bookings</button>
                    <button>Others' Bookings</button>
                    <button>Booking Request</button>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default ViewBooking;