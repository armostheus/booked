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
            events : Events
        }
        this.displayEvent = this.displayEvent.bind(this);
    }

    displayEvent(data){
        console.log(data);
    }

    render(){
        return(
            <div>
                <h3>View Your Events</h3>
                {
                    this.state.events.map(data => <EventsList key={data.id} data={data} displayEvent={(data)=>this.displayEvent(data)}/>)
                }
                <div>
                    {/* Implement display div here */}
                </div>
            </div>
        )
    }
}
export default ViewEvents;