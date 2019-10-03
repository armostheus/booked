import _ from 'lodash';
import { MonthData } from '../mock-data/MockHomeData'

export const setDate = (date) => dispatch => {
    let month = {
        type : 'SET_DATE',
        payload : {
            currentMonth : date.getMonth(),
            currentYear : date.getFullYear(),
            bookings : []
        }
    }
    dispatch(month);
}

export const fetchYearBookings = () => async (dispatch, getState) => {
    await dispatch(fetchBookings(getState().metadata.currentYear));
}

export const fetchBookings = (year) => dispatch => {
    fetch("http://localhost:3100/fetch/yearBooking",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify({year : year})
    }).then(res => res.json())
    .then(bookings => 
        dispatch({
            type: 'SET_BOOKING',
            payload: {
                bookings : bookings
            }
        }) 
    )
}

export const updateFriendlist = () => async (dispatch, getState) => {
    console.log("Action updateFriendlist")
    await dispatch(getFriendList(getState().user[0].user));
}

export const getFriendList = (user) => dispatch => {
        fetch("http://localhost:3100/fetch/friendList",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify({user : user})
    }).then(res => res.json())
    .then(friendList => {
        dispatch({
            type : 'UPDATE_FRIENDLIST',
            payload: friendList
        })
    })
}