import React from 'react'

const ExitBookingList = (props) => {
    let month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    const exitBooking = () => props.exit(props.data);
    const displayView = () => props.view(props.data);
    
    return(
        <React.Fragment>
            <div onClick={displayView}>
                <div>
                    {props.data.date.getDate()} {month[props.data.date.getMonth()]}, {props.data.startTime} - {props.data.endTime}
                </div>
                <div>
                    {props.data.bookingTitle}
                </div>
            </div>
                <button onClick={exitBooking}>Exit</button>
        </React.Fragment>
    )
}

export default ExitBookingList;