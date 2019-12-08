import React from 'react';
import { connect}  from 'react-redux';


import { LibraryLayout } from '../containers/LibraryLayout';
import { getMovies } from "../actions";


 class Main extends React.Component{

    componentDidMount() {
        this.props.getMovies();   
    }

    render (){
        const {loading}=this.props;
        return (
            <main>
                 {loading
                ? <h1 className="ant-spin">Идет загрузка...</h1>
                :  <LibraryLayout />
                 } 
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