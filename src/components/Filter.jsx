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
        //console.log('новая-'+selectValue+"  "+inputValue+movies);
        const twoFilters=inputValue.length>0&&selectValue.length>1;
        const onlyInput=inputValue.length>0&&selectValue.length<1;
        const onlySelect=inputValue.length<1&&selectValue.length>1;
       
        let filteredMovies=[];
        for (let i=0; i<movies.length; i++){
            if (twoFilters)
            {
                //console.log("input+select"+selectValue);
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase())
                 && movies[i].genre.some(element => element.trim() === selectValue))
                
                   filteredMovies.push(movies[i]);
            }
            if (onlyInput)
            {
                //console.log("only input");
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase()))
                    filteredMovies.push(movies[i]);
            }
            if (onlySelect)
            {
                //console.log("only select");
                if(movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
        }
        
        //console.log("filtered-"+filteredMovies);
        const filtered=Boolean(inputValue||selectValue);

        this.props.setFilteredMovies(filteredMovies,filtered);
    
    }
     changeSelectValue=(value) =>{
    
        //console.log (value);
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
                //console.log("input+select"+selectValue);
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase())
                 && movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
            if (onlyInput)
            {
                //console.log("only input");
                if(movies[i].title.toLowerCase().includes(inputValue.toLowerCase()))
                    filteredMovies.push(movies[i]);
            }
            if (onlySelect)
            {
                //console.log("only select");
                if(movies[i].genre.some(element => element.trim() === selectValue))
                    filteredMovies.push(movies[i]);
            }
        }
        
        //console.log("filtered-"+filteredMovies);
        const filtered=Boolean(inputValue||selectValue)
        this.props.setFilteredMovies(filteredMovies,filtered);
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