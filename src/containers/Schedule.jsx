import React from 'react';
import {connect} from 'react-redux';


import {getSessions}  from "../actions/session";
import {FilmBox} from "../components/FilmBox";
import {dateOptions} from "../constants";

import { Spin, Icon } from 'antd';



class Schedule extends React.Component{

     
    componentDidMount(){
        this.props.getSessions();
        
       
        
    }

    getSessions=() => {
        const {movies,sessions,rooms}=this.props;
       

        const sessionData=movies.length&&sessions.length&&rooms.length ? sessions.map (item => {
            return item.map(element=>({
                ...element, 
                room: rooms.find(room=>room._id===element.room).name,
                movie:movies.find (movie=>movie._id===element.movie)
            }))
        }) : [];
        console.log ("data",sessionData);
        
        return sessionData.map (item => {return item.filter (elem => elem.movie)});
    }
        
    

    render () {
        const {loading}=this.props;
        const id=this.props.location.pathname;
        const id1=id.substring(10);
        if(loading)
        return <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 36 }} spin />} />

        return (
            <div className="schedule">
                {
                this.getSessions().map((item,i)=>(
                    <div className="DateMovieBlock" key={i}>
                        <h2 className="DateHeader">{new Date(item[0].date).toLocaleString("ru",dateOptions)}</h2>
                        <FilmBox movieDate={item} id={id1}/>
                    </div>
                ))
                
                }
            </div>
        );
    }
}
const mapDispatchtoProps={
    getSessions
};
const mapStateToProps = (state) => ({
    sessions:state.data.sessions,
    loading:state.loading.loading,
    movies:state.data.movies,
    rooms:state.data.rooms
});
export const ScheduleContainer=connect(mapStateToProps, mapDispatchtoProps)(Schedule);