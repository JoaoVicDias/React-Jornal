import React,{Component} from 'react'
import HeaderIdexPage from '../components/headerIndexPage/headerIndexPage'
import ClassificadosTitle from '../components/classificadosTitle/classificadosTitle'
import ClassificadosItems from '../components/classificadosItems/classificadosItems'
import ClassificadosFooter from '../components/classificadosFooter/classificadosFooter'
import AddClassificadosForm from '../components/addClassificadosForm/addClassificadosForm'
import SuccessMsg from '../components/successMsg/successMsg'
import ErrorMsg from '../components/errorMsg/errorMsg'
import * as actiontypes from '../store/actions/index'
import { connect } from 'react-redux'




class IndexPage extends Component{
        state = {
            showForm:false,
            inputElements:{
                inputTextTitle:{
                    value:"",
                    touched:false,
                    valid:false,
                    validation:{
                        required:true,
                        minLength:2
                    }
                },
                textareaDescription:{
                    value:"",
                    touched:false,
                    valid:false,
                    validation:{
                        required:true,
                        minLength:4
                    }
                }
            },
            classificadosData: [],
            classificadosDataFiltered:[]

        }

        componentDidMount(){
            this.GetClassificadosHandler()
        }

        CloseButtonHandler = ()=>{
            this.setState({showForm:false})
        }

        AddButonHandler = ()=>{
            this.setState({showForm:true})
        }

        InputHandler = (event,inputName)=>{
           const newInput = {
            ...this.state.inputElements,
            [inputName]:{
                ...this.state.inputElements[inputName],
                value:event.target.value,
                valid:this.ValidationHandler(event.target.value,this.state.inputElements[inputName].validation),
                touched:true
            }
           }
           this.setState({inputElements:newInput})
        }

        ValidationHandler = (value,rules)=>{
            let isValid = true

            if(rules.required){
                isValid = value.trim() !== ""  && isValid
            }

            if(rules.minLength){
                isValid = value.length >= rules.minLength && isValid
            }

            if(rules.maxLength){
                isValid = value.length <= rules.maxLength && isValid
            }

            return isValid
        }

        GetClassificadosHandler = () =>{
            const url = "http://localhost:3001"
            fetch(url).then(res=>{
                return res.json()
            }).then(result =>{
                this.setState({classificadosData:this.state.classificadosData.concat(result.classificados)})
            })
        }

        CreateClassificadosHandler = (event)=> {
            event.preventDefault()

            const createClassificadosData = {
                title:this.state.inputElements.inputTextTitle.value,
                description:this.state.inputElements.textareaDescription.value
            }
            this.props.onCreateClassificados(createClassificadosData).then(()=>{
                this.GetClassificadosHandler()
                this.setState({showForm:false,classificadosData:[]})
            })
            this.ClearInputsHandler()
        }

        ClearInputsHandler = ()=>{
            const newInputState = {
            ...this.state.inputElements,
            "inputTextTitle":{
                ...this.state.inputElements.inputTextTitle,
                value:"",
                touched:false,
                valid:false
            },
            "textareaDescription":{
                ...this.state.inputElements.textareaDescription,
                value:"",
                touched:false,
                valid:false
            }
            }
            this.setState({inputElements:newInputState})
        }

        SuccessMsgHandler=()=>{
            this.props.onShowSuccesMsg()
        }

        ErrorMsgHandler=()=>{
            this.props.onShowErrorMsg()
        }

        DeleteItemHandler = (id)=>{
            const url = "http://localhost:3001/" + id
            fetch(url,{method:"DELETE"}).then(res=>{
                return res.json()
            }).then(() =>{
                    this.GetClassificadosHandler()
                    this.setState({classificadosData:[]})
            })
        }

        FilterItemHandler = (event) =>{
            if(event.target.value === ""){
                this.setState({classificadosDataFiltered:[]})
            }
            const filteredClassificados = this.state.classificadosData.filter(e => e.title.toLowerCase().split(' ').join('') === event.target.value.toLowerCase().split(' ').join(''))
           
            if(filteredClassificados.length >= 1){
                this.setState({classificadosDataFiltered:filteredClassificados})
            }
        }


    render(){

        let disabledBtnForm = false
        const arrayInputElements = []
        for(let key in this.state.inputElements){
            arrayInputElements.push({
                config:this.state.inputElements[key]
            })
        }

        arrayInputElements.map(e=>{
            if(!e.config.valid){
                disabledBtnForm = true
            }
            return disabledBtnForm
        })
        
        return(
            <React.Fragment>
                <HeaderIdexPage/>
                <main>  
                    <SuccessMsg clickedSuccesBtn={this.SuccessMsgHandler} showSuccesMsg={this.props.showSuccesMsgReducer}/>
                    <ErrorMsg clickedErrorBtn={this.ErrorMsgHandler} showErrorMsg={this.props.showErrorMsgReducer}/>
                    <AddClassificadosForm textValue={this.state.inputElements.inputTextTitle.value} 
                    changedText={(event)=>this.InputHandler(event,"inputTextTitle")} 
                    textValid={this.state.inputElements.inputTextTitle.valid}
                    textTouched={this.state.inputElements.inputTextTitle.touched}
                    clicked={this.CloseButtonHandler} 
                    show={this.state.showForm}
                    disabledBtn={disabledBtnForm}
                    createButton={(event)=>this.CreateClassificadosHandler(event)}
                    textareaValue={this.state.inputElements.textareaDescription.value}
                    textareaValid={this.state.inputElements.textareaDescription.valid}
                    changedTextarea={(event)=>this.InputHandler(event,"textareaDescription")}
                    textareaTouched={this.state.inputElements.textareaDescription.touched}/>
                    
                    <ClassificadosTitle 
                    inputSearch={(event)=>this.FilterItemHandler(event)} 
                    addClicked={this.AddButonHandler}/>
                    <ClassificadosItems 
                    classificadosDataFiltered={this.state.classificadosDataFiltered} 
                    classificadosData={this.state.classificadosData} 
                    clickedDeleteClassificados={this.DeleteItemHandler} />
                    <ClassificadosFooter number={this.state.classificadosData.length}/>
                </main>
            </React.Fragment>
        )
    }
}

const mapsToState = state=>{
    return{
        showSuccesMsgReducer:state.successMsg,
        showErrorMsgReducer:state.errorMsg,
    }
}


const mapsToDispacth = dispatch=>{
    return{
        onCreateClassificados:(classificadosData)=>dispatch(actiontypes.createClassificados(classificadosData)),
        onShowSuccesMsg:()=>dispatch(actiontypes.showSuccesMsgHandler()),
        onShowErrorMsg:()=>dispatch(actiontypes.showErrorMsgHandler()),

    }
}

export default connect(mapsToState,mapsToDispacth)(IndexPage)