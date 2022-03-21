import React, { Component } from "react";
export class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        // this.date = new Date();
        this.timerId = setInterval(this.mettreAJourDate)
    }

    mettreAJourDate =() => {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
        <div>
            {/* {les accolades ne savent pas afficher les objets}
                JSON.stringify(monObject)
             */}
            <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
        );
    }

}