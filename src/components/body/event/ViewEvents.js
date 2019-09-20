import React from 'react'
import {Events} from '../../../mock-data/MockEvents';

const EventsList = (props) => {
    return(
        <div onClick={()=>props.displayEvent(props.data)}>
            <h4>{props.data.eventName}</h4>
            {props.data.title}<br/>
        </div>
    )
}

class ViewEvents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events : Events,
            selectedEvent : {
                id : null,
                eventName : null,
                title : null,
                description : null
            }
        }
        this.displayEvent = this.displayEvent.bind(this);
    }

    displayEvent(data){
        this.setState({selectedEvent : data})
    }

    render(){
        return(
            <div>
                <h3>View Your Events</h3>
                {
                    this.state.events.map(data => <EventsList key={data.id} data={data} displayEvent={(data)=>this.displayEvent(data)}/>)
                }
                <div style={this.state.selectedEvent.id ? {display : 'block'} : {display : 'none'}}>
                    Event Name : {this.state.selectedEvent.eventName}<br/>
                    Title : {this.state.selectedEvent.title}<br/>
                    Description : {this.state.selectedEvent.description}<br/>
                    <button>Previous</button> <button>Next</button><br/>
                    <button>Edit</button> <button>Delete</button> <button>Close</button>
                </div>
            </div>
        )
    }
}
export default ViewEvents;