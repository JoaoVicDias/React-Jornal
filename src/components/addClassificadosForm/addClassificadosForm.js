import React,{ Component } from 'react'
import classes from './addClassificadosForm.module.css'
import InputsClassificadosForm from '../inputsClassificadosForm/inputsClassificadosForm'
import {connect} from "react-redux"
import Spinner from '../UI/spinner/spinner'


class AddClassificadosForm extends Component{
   render(){

    const formCreate = this.props.spinner ? <Spinner/> :<form  className={classes.addClassificadosForm}>
    <div onClick={this.props.clicked} className={classes.closeButton}>x</div>
   <h1 className={classes.addClassificadosForm__title}>
       Criar novo classificado
   </h1>

   <label className={classes.addClassificadosForm__label}>Título</label>
       
   <InputsClassificadosForm 
   textTouched={this.props.textTouched}
   textValid={this.props.textValid} 
   textValue={this.props.textValue} 
   changedText={this.props.changedText} 
   type="text" 
   placeholder="Titulo"/>
   
   <label className={classes.addClassificadosForm__label}>Definição</label>

   <InputsClassificadosForm 
    textareaTouched={this.props.textareaTouched}
   textareaValid={this.props.textareaValid} 
   changed={this.props.changed} 
   textareaValue={this.props.textareaValue} 
   changedTextarea={this.props.changedTextarea} 
   type="textarea" />
   <br/>

   <button disabled={this.props.disabledBtn} className={classes.addClassificadosForm__btn} onClick={this.props.createButton}>Criar</button>
</form>

    return(     
            <div className={classes.addClassificados} style={{opacity:this.props.show?"1":"0",transform:this.props.show?"translateY(0)":"translateY(-100vh)"}} >
                {formCreate}
            </div>
               
       
    )
   }
} 

const mapsToState = state=>{
    return{
        spinner:state.spinner
    }
}


export default connect(mapsToState)(AddClassificadosForm)