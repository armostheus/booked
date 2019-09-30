import React from 'react'
import {connect} from 'react-redux'

import Header from './Header'
import Body from './Body'
import {setDate, fetchYearBookings } from '../actions';

class App extends React.Component{

    componentWillMount(){
        this.props.setDate(new Date);
        this.props.fetchYearBookings();
    }

    render(){
        return(
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        metadata : state.metadata
    }
}



export default connect(mapStateToProps, {setDate, fetchYearBookings})(App);