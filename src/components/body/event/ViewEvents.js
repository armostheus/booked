import React from 'react'
import {Events} from '../../../mock-data/MockEvents';

const EventsList = (props) => {
    return(
        <div>
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
    }

    render(){
        return(
            <div>
                <h3>View Your Events</h3>
                {
                    this.state.events.map(data => <EventsList key={data.id} data={data}/>)
                }
            </div>
        )
    }
}
export default ViewEvents;