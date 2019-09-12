import React from 'react'

const HomeBookingList = (props) => {
    return(
        <div>
            <h5>{props.data.startTime} - {props.data.endTime}</h5>
            {props.data.title}
        </div>
    )
}

export default HomeBookingList;