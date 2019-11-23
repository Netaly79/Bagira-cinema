import React, {Component} from 'react';
import {connect} from 'react-redux';

class SingleMovie extends React.Component{
    state= {movie:null};

    componentDidMount(){
        const {match,movies} = this.props;
        const movieId=this.props.match._id;
        const movie=movies.find(item => item._id===movieId);
        this.setState({movie});

    }
    render (){
        console.log ("this.props",this.props);
        return (
      
            <div>fgfgf</div>
        );
    }
}
const mapStateToProps = (state) => ({
    movies:state.data.movies
});

export const SingleMovieContainer = connect(mapStateToProps)(SingleMovie);