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
        const {movies}=this.props;
        inputValue=value;
        
        const twoFilters=inputValue.length>0&&selectValue.length>1;
        const onlyInput=inputValue.length>0&&selectValue.length<1;
        const onlySelect=inputValue.length<1&&selectValue.length>1;
       
        let filteredMovies=[];
        for (let i=0; i<movies.length; i++){
            if (twoFilters)
            {
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase())
                 && movies[i].genre.some(element => element.trim() === selectValue))
                   filteredMovies.push(movies[i]);
            }
            if (onlyInput)
            {
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase()))
                    filteredMovies.push(movies[i]);
            }
            if (onlySelect)
            {
                if(movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
        }
        const filtered=Boolean(inputValue||selectValue);
        this.props.setFilteredMovies(filteredMovies,filtered);
    }
     changeSelectValue=(value) =>{
        if(value!=="")
            selectValue=value;
        else
            selectValue='';
        const {movies}=this.props;
        const twoFilters=inputValue.length>0&&selectValue.length>1;
        const onlyInput=inputValue.length>0&&selectValue.length<1;
        const onlySelect=inputValue.length<1&&selectValue.length>1;

        let filteredMovies=[];
        for (let i=0; i<movies.length; i++){
            if (twoFilters)
            {
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase())
                 && movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
            if (onlyInput)
            {
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase()))
                    filteredMovies.push(movies[i]);
            }
            if (onlySelect)
            {
                if(movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
        }
        const filtered=Boolean(inputValue||selectValue)
        this.props.setFilteredMovies(filteredMovies,filtered);
      }

    render (){
        return(
            <React.Fragment>
                <div className="filter-to-title">
                    <p className="filter-label">Поиск по названию</p>
                    <input type="text"
                        className="filter"
                        value={this.value} 
                        name="filter-name"
                        placeholder="Название фильма"
                        onChange={this.changeInputValue}
                    />
                </div>
                <div className="filter-to-genre">
                     <p className="filter-label">Поиск по жанру</p>
                    <Select class="filter" onChange={this.changeSelectValue} >
                    <Option value="" key='zero'>  все жанры</Option>
                        {this.props.genres.map(item =>  <Option value={item} key={item}>{item} </Option>)}
                    </Select> 
                </div>
            </React.Fragment>
        )
    }};

    const mapStateToProps = (state) => ({
        movies:state.data.movies,
        genres:state.data.genres,
        filteredMovies:state.data.filteredMovies,
    });
    
    const mapDispatchToProps =  {
        setFilteredMovies
    };
   
    export const FilterContainer= connect(mapStateToProps,mapDispatchToProps )(Filter);