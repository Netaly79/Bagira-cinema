import React from 'react';
import { connect}  from 'react-redux';
import { Spin, Icon } from 'antd';

import { LibraryLayout } from '../containers/LibraryLayout';
//import {Route, Switch} from 'react-router-dom';
import { getMovies } from "../actions";
//import { LibraryContent} from "../components/LibraryContent";
//import {SingleMovieContainer,AllMovieContainer} from "../containers"

 class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render (){
        const {loading} = this.props;
        
        return (
            <main>
                {loading
                ? <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 36 }} spin />} />
                : <LibraryLayout />}
                 
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