import React from 'react'
import DatePicker from 'react-datepicker'

import ExitBookingList from '../list/ExitBookingList';
import { UpcomingBookingList } from '../../../mock-data/UpcomingBookingList'

class ExitBooking extends React.Component{
    constructor(props){
        super(props);
        this.state = {data : UpcomingBookingList}
        this.openDetailedView = this.openDetailedView.bind(this);
        this.exitBooking = this.exitBooking.bind(this);
    }

    openDetailedView(data){
        console.log(data);
    }

    exitBooking(data){
        console.log(data);
    }

    render(){
        return(
            <div>
                <h3>ExitBooking</h3>
                Your Upcoming Bookings.<br/>
                Month: <DatePicker 
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                        />
                <br />
                <br />
                {
                    this.state.data.map(dat => 
                        <ExitBookingList key={dat.desc} data={dat} view={this.openDetailedView} exit={this.exitBooking}/>
                    )
                }
            </div>
        )
    }
}

export default ExitBooking;