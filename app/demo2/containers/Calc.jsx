import React from "react";
import { connect } from "react-redux";
import { addAction,subAction } from "../actions/autoAdd";

class Calc extends React.Component {

    constructor() {
        super();

        this.refInput = (element) =>{
            this.inputEl = element;
        }
    }



    render() {

        return (
            <div>
              <input ref={this.refInput} defaultValue= "0"/>
              <button  onClick={()=>this.props.add(   this.inputEl)}> add</button>
              <button  onClick={()=>this.props.sub(this.inputEl)}> sub </button>
              <span>result:{this.props.number}</span>


            </div>


        )


    }
}


const mapStateToProps  = (state,ownProps) => {
  debugger;
    return {
       number:state.autoTodoReducer
    }

}

const mapDispatchToProps = dispatch => (
    {
      sub:(input)=>dispatch(subAction(Number(input.value))),
      add:(input)=>dispatch(addAction(Number(input.value)))
    }
)


export default connect(mapStateToProps,mapDispatchToProps)(Calc);
