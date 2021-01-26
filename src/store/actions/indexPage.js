import * as actionsTypes from './actionsTypes'



export const createClassificadosStart = ()=>{
    return{
        type:actionsTypes.CREATE__CLASSIFICADOS__START
    }
}

export const createClassificadosSuccess = ()=>{
    return{
        type:actionsTypes.CREATE__CLASSIFICADOS__SUCCESS
    }
}

export const createClassificadosError = ()=>{
    return{
        type:actionsTypes.CREATE__CLASSIFICADOS__ERROR
    }
}

export const createClassificados = (classificadosData)=>{
    return dispacth=>{
        dispacth(createClassificadosStart())
        return  fetch("http://localhost:3001",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:classificadosData.title,
                description:classificadosData.description
            })
        }).then(()=>{
            dispacth(createClassificadosSuccess())
        }).catch(()=>{
            dispacth(createClassificadosError())
        })
    }
}

export const showSuccesMsgHandler = ()=>{
    return{
        type:actionsTypes.SUCCES__MSG__HANDLER
    }
}

export const showErrorMsgHandler = ()=>{
    return{
        type:actionsTypes.ERROR__MSG__HANDLER
    }
}




