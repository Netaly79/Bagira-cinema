import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class SingleMovie extends React.Component{
    state= {movie:{}};
   

    componentDidMount(){
       
        console.log ("singleProps",this.props);
        const {match,movies} = this.props;
        const movieId=match.params.id;
        const movie=movies.find(item => item._id===movieId);
        this.setState({movie});

console.log( "movie",{movie});
    }
    
    render (){
        
      
        const {movie} =this.state;
        const actors = movie.actors ? movie.actors.join (', ').slice (0,-2) : "Хью Джекман и Ко";
        const country = movie.country && movie.country.join(", ");
        const age = movie.age ? movie.age+"+" : "не ограничен";
        return (
      <div>
          <h1 className="movie-title single-movie-title">{movie.title}</h1>
          <div className="single-movie-container">
                <div className="pictureBox">
                    <img className="movie-poster-small" src={movie.poster} alt="poster"></img>
                    <p>{country}.<br/>{movie.genre && movie.genre.join(",")}</p>
                   < div className="ticket">
                   <Link to={`/schedule/${movie._id}`} >
                        <button className="buyTicket"></button>
                        <p>Купить билет</p> </Link>
                    </div>
                </div>
                <div className="descriptionBox">
                    <p className="MovieDescription">{movie.description}</p>
                    <hr />
                    <p className="info"><span>Актеры: </span>{actors}</p>
                    <p className="info"><span>Возраст: </span>{age}</p>
                    <p className="info"><span>Язык: </span>{movie.language}</p>
                    <p className="info"><span>Длительность: </span>{movie.long} ч.</p>
                    <hr />
                    <div className="trailer">
                         <iframe title="video" width="100%" height="360" src={movie.trailer} frameBorder="5px" allowFullScreen></iframe>
                    </div>
                </div>
          </div>
          
      </div>
        );
    }
}
const mapStateToProps = (state) => ({
    movies:state.data.movies,
    loading:state.loading.loading
});


export const SingleMovieContainer = connect(mapStateToProps)(SingleMovie);