import React from 'react';
import {connect} from 'react-redux';
import  {setFilteredMovies} from '../actions';
import { Select } from 'antd';


const { Option } = Select;
let inputValue="";
let selectValue="";



class Filter extends React.Component{
   
    changeInputValue = (event) => {
        
        const {value}=event.target;
        inputValue=value;
        console.log ('props',this.props);
        let filteredMovies=
            this.props.movies.filter (item => (
            item.title.toLowerCase().includes(inputValue.toLowerCase()
            ))
        );
       
        const filtered=Boolean(value.length);

        this.props.setFilteredMovies(filteredMovies,filtered);
    
    }
     changeSelectValue=(value) =>{
    
        console.log (value);
        selectValue=value;
        const filteredSelectMovies=this.props.movies.filter (item => (
            item.genre.some(element => element.trim() === value)
            )
            );
        const filtered=Boolean(filteredSelectMovies.length);
        console.log (filteredSelectMovies);
        this.props.setFilteredMovies(filteredSelectMovies,filtered);
      }
    render (){
        
        return(
            <React.Fragment>
                <div className="filterToTitle">
                    <p className="FilterLabel">Поиск по названию</p>
                    <input type="text"
                        className="Filter"
                        value={this.value} 
                        name="filterName"
                        placeholder="Название фильма"
                        onChange={this.changeInputValue}
                    />
                </div>
                <div className="filterToGenre">
                     <p className="FilterLabel">Поиск по жанру</p>
                    <Select class="Filter" onChange={this.changeSelectValue} >
                    <Option value="" key='zero'>  все жанры</Option>
                        {this.props.genres.map(item =>  <Option value={item} key={item}>{item} </Option>)}
                    </Select> 
                </div>
            </React.Fragment>
        )
    }
    };

    const mapStateToProps = (state) => ({
        movies:state.data.movies,
        genres:state.data.genres,
        filteredMovies:state.filter.filteredMovies,
        
       
    });
    
    const mapDispatchToProps =  {
        setFilteredMovies
    };
   

    export const FilterContainer= connect(mapStateToProps,mapDispatchToProps )(Filter);