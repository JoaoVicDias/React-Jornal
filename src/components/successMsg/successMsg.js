
import classes from './successMsg.module.css'



const successMsg = props =>{
    return(
        <div className={classes.successMsg} style={{transform:props.showSuccesMsg? "translateX(0)":"translateX(100vw)",opacity:props.showSuccesMsg? "1":"0"}}>
            <button onClick={props.clickedSuccesBtn}>x</button>
            <h1> Notícia criada com sucesso! </h1>
        </div>
    )
}



export default successMsg