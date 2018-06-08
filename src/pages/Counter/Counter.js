import React,{Component} from 'react';
import {increment,decrement,reset} from "../../redux/actions/counter"
import {connect} from 'react-redux';

class Counter extends Component{
    render(){
        return(
        <div>
            <div>Current count is</div>
            <button onClick={()=>{

            }}>Increase</button>
            <button onClick={()=>{
                console.log('Decrease');
            }}>Decrease</button>
            <button onClick={()=>{
                console.log('Reset');
            }}>Reset</button>
        </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        counter:state.counter
    }
};

const mapDispatchToProps =(dispatch) => {
    return {
        increment:()=>{
            dispatch(increment())
        },
        decrement:()=>{
            dispatch(decrement())
        },
        reset:()=>{
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps);