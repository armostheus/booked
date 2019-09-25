import _ from 'lodash';
import { MyBookings } from '../mock-data/ViewBookingData'

export const setDate = (date) => dispatch => {
    let month = {
        type : 'SET_DATE',
        payload : {
            currentMonth : date.getMonth(),
            currentYear : date.getYear(),
            bookings : []
        }
    }
    dispatch(month);
}

export const fetchYearBookings = () => async (dispatch, getState) => {
    await dispatch(fetchBookings(getState().metadata.currentYear));
}

export const fetchBookings = (year) => dispatch => {
    const response =  MyBookings;
    dispatch({
        type: 'SET_BOOKING',
        payload: {
            bookings : MyBookings
        }
    })
}