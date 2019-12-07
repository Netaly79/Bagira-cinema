import React from 'react';
import {Route, Switch} from 'react-router-dom';

import { LibrarySidebar } from '../components/LibrarySidebar';

import {SingleMovieContainer,AllMovieContainer,ScheduleContainer} from "../containers"
import { Banner } from '../components/Banner';

export const LibraryLayout = () => (
    
    <div className="library">
        
        <Switch>
            <Route path="/" component={LibrarySidebar} exact />
            <Route path="/schedule" component={Banner} />
        </Switch>
        {/* <LibrarySidebar /> */}
        <Switch>
                    <Route path="/" component={AllMovieContainer} exact />
                    <Route path="/movie/:id" component={SingleMovieContainer} />
                    <Route path="/schedule" component={ScheduleContainer} />
        </Switch> 
    </div>
)

