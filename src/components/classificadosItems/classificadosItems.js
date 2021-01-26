import classes from './classificadosItems.module.css'
import ClassificadoItem from './classificadoItem/classificadoItem'



const classificadosItems = props =>{

    return(
        <section className={classes.classificadosItems}> 
            {props.classificadosDataFiltered.length >= 1? props.classificadosDataFiltered.map(e=>{
                return <ClassificadoItem key={e.id} clickedDeleteClassificados={props.clickedDeleteClassificados} itemId={e.id} title={e.title} description={e.description} date={e.date} />
            }) : props.classificadosData.map(e=>{
                return <ClassificadoItem key={e.id} clickedDeleteClassificados={props.clickedDeleteClassificados} itemId={e.id} title={e.title} description={e.description} date={e.date} />
            })}
        </section>
    )
}

export default classificadosItems