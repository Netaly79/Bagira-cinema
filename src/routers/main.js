import React from 'react';
import { connect}  from 'react-redux';

import { LibraryLayout } from '../containers/LibraryLayout';
import {Route, Switch} from 'react-router-dom';
import { getMovies } from "../actions";
import { LibraryContent} from "../components/LibraryContent";

 class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render (){
        return (
            <main>
                <LibraryLayout> 
                <Switch>
                    <Route path="/" exact component={LibraryContent}/>
                    <Route path="/movies/:id" />
                </Switch> 
                </LibraryLayout> 
            </main>
        );
    }
}


const mapDispatchToProps= {
    getMovies
};

export const MainContainer = connect (null, mapDispatchToProps)(Main);