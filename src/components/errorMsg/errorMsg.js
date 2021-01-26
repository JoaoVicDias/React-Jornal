import classes from './errorMsg.module.css'



const errorMsg = props =>{
    return(
        <div className={classes.errorMsg} style={{transform:props.showErrorMsg? "translateX(0)":"translateX(100vw)",opacity:props.showErrorMsg? "1":"0"}}>
            <button onClick={props.clickedErrorBtn}>x</button>
            <h1> Algo deu errado! </h1>
        </div>
    )
}



export default errorMsg