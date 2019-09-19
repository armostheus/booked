import React from 'react'

class CreateEvents extends React.Component{
    render(){
        return(
            <div>
                <h3>Create New Event</h3>
                Title : <input type="text" name="title" /><br/>
                Description : <textarea id="eventDesc" name="eventDesc" rows="5">
                                A short description of your event
                              </textarea> <br/>
                Event Name : <input type="text" name="title" /><br/>    
                <button>Create Event</button>           
            </div>
        )
    }
}
export default CreateEvents;