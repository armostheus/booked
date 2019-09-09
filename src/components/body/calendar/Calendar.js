import React from 'react'

const Calendar = (props) => {
    return(
        <div>
            <h5>Calendar</h5>
            {props.events}
            {props.dateSelected}
            {props.monthSelected}
        </div>
    )
}

export default Calendar;