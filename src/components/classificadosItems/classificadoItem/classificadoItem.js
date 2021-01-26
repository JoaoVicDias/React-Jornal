import classes from './classificadoItem.module.css'


const classificadoItem = props =>{


    return(
       <article className={classes.classificadoItem}>
           <button onClick={()=>props.clickedDeleteClassificados(props.itemId)} >x</button>
           <h2>{props.title}</h2>
           <h5>{props.date}</h5>
           <p>{props.description}</p>
       </article>
    )
}

export default classificadoItem