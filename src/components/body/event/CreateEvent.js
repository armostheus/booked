import React from 'react'

class CreateEvents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : null,
            description : null,
            event : null
        }
        this.changeDescription = this.changeDescription.bind(this)
        this.changeEvent = this.changeEvent.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.createEvent = this.createEvent.bind(this)
    }

    changeDescription(e){
        this.setState({description : e.target.value})
    }
    changeEvent(e){
        this.setState({event : e.target.value})
    }
    changeTitle(e){
        this.setState({title : e.target.value})
    }
    createEvent(){
        console.log(this.state)
    }


    render(){
        return(
            <div>
                <h3>Create New Event</h3>
                Title : <input type="text" name="title" onChange={this.changeTitle}/><br/>
                Description : <textarea id="eventDesc" name="eventDesc" rows="5" onChange={this.changeDescription} placeholder={'A short description of your event'}>
                                
                              </textarea> <br/>
                Event Name : <input type="text" name="title"  onChange={this.changeEvent}/><br/>    
                <button onClick={this.createEvent}>Create Event</button>           
            </div>
        )
    }
}
export default CreateEvents;