import React from 'react';
import {connect} from 'react-redux';

import {getSession}  from "../actions/session";


class Schedule extends React.Component{

    componentDidMount(){
        this.props.getSession();
    }
    render () {
        return (
            <h3>schedule</h3>
        );
    }
}
const mapDispatchtoProps={
    getSession
};
const mapStateToProps = (state) => ({
    sessions:state.session.sessions
});
export const ScheduleContainer=connect(mapStateToProps, mapDispatchtoProps)(Schedule);