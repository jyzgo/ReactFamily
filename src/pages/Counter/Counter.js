import React,{Component} from 'react';

export default class Counter extends Component{
    render(){
        return(
        <div>
            <div>Current count is</div>
            <button onClick={()=>{
                console.log('Increse');
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