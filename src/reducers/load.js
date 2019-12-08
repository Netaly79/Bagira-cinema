

const InitialValues = {
    loading:false
};

export const Load= (state=InitialValues,action) =>{
    switch (action.type){
        case "IS_LOADING":
            return {
                ...state,
                loading:true
        };
        case "SET_MOVIES":
        case "SET_SESSION":
        case "LOADING_ERROR":
                return {
                    ...state,
                    loading:false,
            };
        default:
            return state;
    }
};