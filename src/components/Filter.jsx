import React from 'react';
import {connect} from 'react-redux';
import  {setFilteredMovies} from '../actions';
import { Select } from 'antd';

const { Option } = Select;

class Filter extends React.Component{
    state={
        inputValue:'',
        selectValue:""
    };
   
    changeInputValue = (event) => {
        const inputValue=event.target.value;
        const {movies}=this.props;
        
        const twoFilters=inputValue.length>0&&this.state.selectValue.length>1;
        const onlyInput=inputValue.length>0&&this.state.selectValue.length<1;
        const onlySelect=inputValue.length<1&&this.state.selectValue.length>1;

        let filteredMovies=[];
        for (let i=0; i<movies.length; i++){
            if (twoFilters)
            {
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase())
                 && movies[i].genre.some(element => element.trim() === this.state.selectValue))
                   filteredMovies.push(movies[i]);
            }
            if (onlyInput)
            {
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase()))
                    filteredMovies.push(movies[i]);
            }
            if (onlySelect)
            {
                if(movies[i].genre.some(element => element.trim() === this.state.selectValue))
                    filteredMovies.push(movies[i]);
            }
        }
        this.setState((state) => ({
            inputValue: state.inputValue=inputValue
          }));
        const filtered=Boolean(inputValue||this.state.selectValue);
        console.log ("filter",this.props.setFilteredMovies);
        this.props.setFilteredMovies(filteredMovies,filtered);
    }
     changeSelectValue=(value) =>{
          const selectValue=value;
      
        const {movies}=this.props;
        const twoFilters=this.state.inputValue.length>0&&selectValue.length>1;
        const onlyInput=this.state.inputValue.length>0&&selectValue.length<1;
        const onlySelect=this.state.inputValue.length<1&&selectValue.length>1;

        let filteredMovies=[];
        for (let i=0; i<movies.length; i++){
            if (twoFilters)
            {
                if(movies[i].title.toLowerCase().includes(this.state.inputValue.toLowerCase())
                 && movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
            if (onlyInput)
            {
                if(movies[i].title.toLowerCase().includes(this.state.inputValue.toLowerCase()))
                    filteredMovies.push(movies[i]);
            }
            if (onlySelect)
            {
                if(movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
        }
        this.setState((state) => ({
            selectValue: state.selectValue=selectValue
          }));
        const filtered=Boolean(this.state.inputValue||selectValue)
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