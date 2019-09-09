import React from 'react'
import Calendar from 'react-calendar/dist/entry.nostyle'


class Home extends React.Component{
    render(){
        return(
            <div>
                <h3>
                    Hi {'{username}'}! here's your calendar.
                </h3>
                <Calendar 
                />
            </div>
        )
    }
}

export default Home;