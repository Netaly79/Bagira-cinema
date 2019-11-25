import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { LibrarySidebar } from '../components/LibrarySidebar';
import { LibraryContent}  from '../components/LibraryContent';
import {SingleMovieContainer,AllMovieContainer} from "../containers"

export const LibraryLayout = () => (
    <div className="library">
        <LibrarySidebar />
        {/* <LibraryContent /> */}
        <Switch>
                    <Route path="/" component={AllMovieContainer} exact />
                    <Route path="/movie/:id" component={SingleMovieContainer} />
        </Switch> 
    </div>
)

