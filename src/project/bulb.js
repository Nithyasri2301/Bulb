import React from "react";
import On from "../on.png";
import Off from "../off.png";
 
export default class Onoff extends React.Component{
    
    constructor(){
        super();
        this.state={bulboff:'false'};
        this.on=this.on.bind(this);
        this.off=this.off.bind(this);


    }
    on(){
        this.setState({bulboff:false});

    }
    off(){
        
        this.setState({bulboff:true});

    }
    componentDidUpdate(){
        console.log("Hi Nithy")
    }

    render(){


        return(
            <div className="container">
           <button onClick={this.on}>ON</button>
           <div className="card">
           <img src={this.state.bulboff ? Off:On }alt="off"/>
           </div>
            <button onClick={this.off}>OFF</button>
          
        </div>


     )
    }














 }