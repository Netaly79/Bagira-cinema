import React from 'react';
import { connect}  from 'react-redux';

import { LibraryLayout } from '../containers/LibraryLayout';
import {Route, Switch} from 'react-router-dom';
import { getMovies } from "../actions";
import { LibraryContent} from "../components/LibraryContent";
import {SingleMovieContainer,AllMovieContainer} from "../containers"

 class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render (){
        const {loading} = this.props;
        console.log(this.props);
        
        return (
            <main>
                {!loading&& <LibraryLayout />}
                 
            </main>
        );
    }
}


const mapDispatchToProps= {
    getMovies
};

const mapStateToProps = (state) => ({
    loading:state.loading.loading
});

export const MainContainer = connect (mapStateToProps, mapDispatchToProps)(Main);