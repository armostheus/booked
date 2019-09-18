import React from 'react'
import { MyBookings, OthersBookings, BookingNotification } from '../../../mock-data/ViewBookingData'

const ViewYourBookings = (props) => {
    let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return(
        <div onClick={() => props.displayDetails(props.data)}>
            {props.data.date.getDate()} {month[props.data.date.getMonth()]}, {props.data.startTime} - {props.data.endTime} <br />
            <h4>{props.data.title}</h4>
        </div>
    )
}

class ViewBooking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            yourBooking : MyBookings,
            othersBooking : OthersBookings,
            requests : BookingNotification,
            selectedTab : 'YB',
            selectedYB : {
                id : null,
                title: null,
                date : new Date("1971-01-01"),
                startTime : null,
                endTime : null,
                otherMembers : [],
                desc : null,
                reminder : null,
            }
        };
        this.changeTab = this.changeTab.bind(this);
        this.displayDetails = this.displayDetails.bind(this);
        this.updateDisplayDetails = this.updateDisplayDetails.bind(this);
    }

    changeTab(view){
        this.setState({selectedTab : view });
    }

    displayDetails(view){
        this.setState({selectedYB : view});
    }

    updateDisplayDetails(p){
        let currentView = [this.state.selectedYB.id, this.state.yourBooking[0].id, this.state.yourBooking[this.state.yourBooking.length-1].id];
            if(p==='p' && currentView[0] != currentView[1]){
                let prevData = this.state.yourBooking.filter(data => data.id === (currentView[0]-1));
                console.log(prevData[0]);
                this.setState({selectedYB : prevData[0]});
            } else if(p==='n'&&currentView[0] != currentView[2]){
                let prevData = this.state.yourBooking.filter(data => data.id === (currentView[0]+1));
                console.log(prevData[0]);
                this.setState({selectedYB : prevData[0]});
            }       
    }

    render(){
        let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        return(
            <div>
                <div>
                    <h3>ViewBooking</h3>
                    <button onClick={() => this.changeTab('YB')}>Your Bookings</button>
                    <button onClick={() => this.changeTab('OB')}>Others' Bookings</button>
                    <button onClick={() => this.changeTab('BR')}>Booking Request</button>
                </div>
                <div style={this.state.selectedTab === 'YB' ? {display:'block'} : {display:'none'}}>
                    {
                        this.state.yourBooking.map(data => <ViewYourBookings key={data.id} data={data} displayDetails={(data) => this.displayDetails(data)}/>)
                    }
                    <div style={this.state.selectedYB.title ? {display:'block'} : {display : 'none'}}>
                        Title : {this.state.selectedYB.title}, <br/>
                        Date : {this.state.selectedYB.date.getDate()} {month[this.state.selectedYB.date.getMonth()]}<br/>
                        Start Time : {this.state.selectedYB.startTime}<br/>
                        End Time : {this.state.selectedYB.endTime}<br/>
                        Other Members : {this.state.selectedYB.otherMembers.map(data => data+',')}<br/>
                        Organizer : {this.state.selectedYB.organizer}<br/>
                        Desc : {this.state.selectedYB.desc}<br/>
                        Reminder : <br/>
                        <button>Update</button> <button>Exit</button><br/>
                        <button onClick={()=>this.updateDisplayDetails('p')}>previous</button> <button onClick={()=>this.updateDisplayDetails('n')}>next</button>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default ViewBooking;