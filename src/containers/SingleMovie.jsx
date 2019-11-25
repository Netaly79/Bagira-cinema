import React, {Component} from 'react';
import {connect} from 'react-redux';

class SingleMovie extends React.Component{
    state= {movie:{}};

    componentDidMount(){
        const {match,movies} = this.props;
        const movieId=match.params.id;
        const movie=movies.find(item => item._id===movieId);
        this.setState({movie});

    }
    
    render (){
        console.log ("movie-", this.state);
        const {movie} =this.state;
        return (
      <div>
          <h1 className="movie-title">{movie.title}</h1>
          <div className="singleMovieContainer">
              <div className="pictureBox">
                <img className="movie-poster-small" src={movie.poster} alt="poster"></img>
                <p>{movie.country}.<br/>{movie.genre}</p>
            </div>
            <div className="descriptionBox">
            <p className="MovieDescription">{movie.description}</p>
            </div>
          </div>
      </div>
        );
    }
}
const mapStateToProps = (state) => ({
    movies:state.data.movies
});

export const SingleMovieContainer = connect(mapStateToProps)(SingleMovie);