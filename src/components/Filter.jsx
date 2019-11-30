import React from 'react';
import {connect} from 'react-redux';
import  {setFilteredMovies} from '../actions'


class Filter extends React.Component{
   
    
    changeInputValue = (event) => {
        
        const {value}=event.target;
        const filteredMovies=this.props.movies.filter (item => (
            item.title.toLowerCase().includes(value.toLowerCase())
            )
            );
        const filtered=Boolean(value.length);
        console.log (filtered);

    
    this.props.setFilteredMovies(filteredMovies,filtered);
    
    }

    render (){
        return(
        <div className="filterToTitle">
            <p className="titleFilterLabel">Поиск по названию</p>
            <input type="text"
                className="titleFilter"
                value={this.value} 
                name="filterName"
                placeholder="Название фильма"
                onChange={this.changeInputValue
            }/>
        </div>)
    }
    };

    const mapStateToProps = (state) => ({
        movies:state.data.movies,
       
    });
    
    const mapDispatchToProps =  {
        setFilteredMovies
    };
   

    export const FilterContainer= connect(mapStateToProps,mapDispatchToProps )(Filter);