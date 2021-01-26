import * as actionsTypes from '../actions/actionsTypes'


const initialState = {      
    spinner:false,
    successMsg:false,
    errorMsg:false
}


const indexPageReducer = (state = initialState, action)=>{  

    switch(action.type){
        
        case actionsTypes.CREATE__CLASSIFICADOS__START:
            return{
                ...state,
                spinner:true
            }

        case actionsTypes.CREATE__CLASSIFICADOS__SUCCESS:
            return{
                ...state,
                spinner:false,
                successMsg:true
            }
        
        case actionsTypes.CREATE__CLASSIFICADOS__ERROR:
            return{
                ...state,
                spinner:false,
                errorMsg:true
            }
             
        case actionsTypes.SUCCES__MSG__HANDLER:
            return{
                ...state,
                successMsg:false
            }

        case actionsTypes.ERROR__MSG__HANDLER:
            return{
                ...state,
                errorMsg:false
            }



        default:
             return state
    }

}



export default indexPageReducer