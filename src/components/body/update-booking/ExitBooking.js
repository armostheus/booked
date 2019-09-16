import React from 'react'
import DatePicker from 'react-datepicker'

import ExitBookingList from '../list/ExitBookingList';
import { UpcomingBookingList } from '../../../mock-data/UpcomingBookingList'

class ExitBooking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : UpcomingBookingList,
            selectedData: {
                bookingTitle : null,
                date : new Date('1971-01-01'),
                startTime : "00:00 AM",
                endTime : "00:00 AM",
                createdBy : "",
                desc : "",
                members : []
            },
            bookingToExit: null
        }
        
        this.openDetailedView = this.openDetailedView.bind(this);
        this.exitBooking = this.exitBooking.bind(this);
        this.closeView = this.closeView.bind(this);
    }

    openDetailedView(data){
        this.setState({selectedData:data})
    }

    exitBooking(data){
        let newDataset = this.state.data.filter(dat => dat.id !== data.id)
        this.setState({data:newDataset})
    }

    closeView(){
        let temp = {
            bookingTitle : null,
            date : new Date('1971-01-01'),
            startTime : "00:00 AM",
            endTime : "00:00 AM",
            createdBy : "",
            desc : "",
            members : []
        }
        this.setState({selectedData : temp})
    }
    render(){
        let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        return(
            <div>
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
                <div style={{display : (this.state.selectedData.bookingTitle ? 'block' : 'none')}}>
                    Booking Title : {this.state.selectedData.bookingTitle}<br/>
                    {this.state.selectedData.date.getDate()} {month[this.state.selectedData.date.getMonth()]}, {this.state.selectedData.startTime} - {this.state.selectedData.endTime} <br/>
                    Created By : {this.state.selectedData.createdBy} <br />
                    Booking Desc : {this.state.selectedData.desc} <br/>
                    Members : {this.state.selectedData.members.map(member => `${member}, `)}
                    <br/><button onClick={() => this.exitBooking(this.state.selectedData)}>Exit Booking</button> <button onClick={this.closeView}>Close</button>
                </div>
            </div>
        )
    }
}

export default ExitBooking;