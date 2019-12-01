import {IS_LOADING, LOADING_ERROR}  from '../constants';

export const isLoading = () => ({
    type: IS_LOADING, 

});

export const loadingError = () =>({
    type: LOADING_ERROR
});