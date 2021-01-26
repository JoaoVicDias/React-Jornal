import classes from './classificadosFooter.module.css'


const classificadosFooter = props =>{


    return(
        <div className={classes.classificadosFooter}>
            {props.number?<h2>{props.number} classificados </h2>:<h2>Não tem nenhum classificado!</h2>}
        </div>
    )
}


export default classificadosFooter