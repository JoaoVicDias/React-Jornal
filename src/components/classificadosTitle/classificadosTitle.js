import classes from './classificadosTitle.module.css'



const classificadosTitle = props=>{

    return(
        <div className={classes.classificadosTitle__items}>
            <h3 className={classes.classificadosTitle__item__title}>
                Classificados
            </h3>
            <div className={classes.classificadosHandler}>
                    <button onClick={props.addClicked}  className={classes.classificadosTitle__item__new}>
                        + Novo classificado
                    </button>

                    <input className={classes.classificadosTitle__item__search} onChange={props.inputSearch}  type="text" placeholder="pesquisar"/>
            </div>
        </div>
    )
}

export default classificadosTitle