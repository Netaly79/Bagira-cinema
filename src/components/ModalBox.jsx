import React from 'react';
import axios from 'axios';

import {URL_FREE_PLACE} from '../constants';
import {sortArray, createRowsArray,getRandomInt} from '../library/functionLibrary';
import { Spin, Icon } from 'antd';
import {TicketSelectBox } from "./TicketSelectBox";
import { CinemaRoom } from './CinemaRoom';
import {BookingForm} from './BookingForm';

export class ModalBox extends React.Component{

    state={
        isLoading:true,
        space:[],
        selectedPlace:null,
        showForm:false
    }
    LoadingFinish=() => this.setState({isLoading:false});

    getPlaceInfo = (arr) => {
        const sortedByRow = sortArray(arr,"row");
        const rows = createRowsArray(sortedByRow);
        const sortedByPlace=rows.map(item => {
            return sortArray(item,"place")
        });
        this.setState({space:sortedByPlace.map ((item => {
            const random=getRandomInt(2,5);
            return item.map (elem => {
                if (elem.place%random===0)
                    return {...elem,
                        booked:true}
                return elem;
            })
        }))})
    };

    componentDidMount(){
        console.log (this.props.sessionId);
        axios.get (`${URL_FREE_PLACE}?session=${this.props.session._id}`)
        .then (({data}) => {
            this.LoadingFinish();
            this.getPlaceInfo(data.space);
        })
        .catch ((error) => {
            console.log(error);
            this.LoadingFinish();
           
        }) 
    }
    handleBuyPlace = (data) => {
        console.log ("data",data);
        if(!data.booked)
        this.setState({selectedPlace:data});
    };
    handleOpenBookingForm = () => {
        this.setState({showForm:true})
    };

    handleForm = ({userName,email}) => {
        //console.log ("client", data)
        alert(`${userName}, желаем приятного просмотра!  Ваш билет ${this.state.selectedPlace.row} ряд ${this.state.selectedPlace.place}  место`);
    }

    render() {
        const {isLoading,handleCloseModalBox}=this.props;
        const {selectedPlace,showForm}=this.state;
        return (
            <div className="modal-box">
                <div className="modal-content">
                    {isLoading
                    ?<Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 36 }} spin />} />
                    :<div>
                        <TicketSelectBox  session={this.props.session}/></div>}
                        <CinemaRoom space={this.state.space} handleBuyPlace={this.handleBuyPlace}/>
                        {selectedPlace&&<div className="sel-place">
                            <h2>Вы выбрали: ряд {selectedPlace.row} место {selectedPlace.place}</h2>
                            {
                                showForm 
                                ?<BookingForm handleForm ={this.handleForm} />
                                :<div className="buy-ticket-sched buy" onClick={this.handleOpenBookingForm}
                                >Забронировать билет</div>
                            }

                        </div>}
                        <span className="close-button" type="close" 
                        onClick={handleCloseModalBox}>X</span>
                    </div>
            </div>
        )
    }
}