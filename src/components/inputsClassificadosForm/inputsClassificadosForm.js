import classes from './inputsClassificadosForm.module.css'


const inputsClassificadosForm = props =>{

    const classesText = [classes.classificados_input]
    const classesTextarea = [classes.classificados_textarea]

    if(!props.textValid && props.textTouched){
        classesText.push(classes.invalidText)
    }
    if(!props.textareaValid && props.textareaTouched){
        classesTextarea.push(classes.invalidText)
    }



    switch(props.type){
        case "text":
            return <input className={classesText.join(' ')} type="text" placeholder={props.placeholder} onChange={props.changedText} value={props.textValue}/> 
        case "textarea":
            return <textarea  className={classesTextarea.join(' ')} onChange={props.changedTextarea} value={props.textareaValue}/>

        default:
            return
    }
}

export default inputsClassificadosForm