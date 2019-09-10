import React from 'react'
import Calendar from 'react-calendar'
import style from './Home.css'
/* import Calendar from 'react-calendar/dist/entry.nostyle'
 */

class Home extends React.Component{
    render(){
        return(
            <div>
                <h3>
                    Hi {'{username}'}! here's your calendar.
                </h3>
                <Calendar tileClassName={
                    ({ date, view }) => view === 'month' && date.getDate() === 3 && date.getMonth() === 8 ? 'wednesday' : null    
                }
                />
            </div>
        )
    }
}

export default Home;