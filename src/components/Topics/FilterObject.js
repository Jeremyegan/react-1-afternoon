import React, { Component } from 'react';



export default class FilterObject extends Component {
    constructor() {
        super() {
            let unFilteredArray = [
                {
                    
                }
            ];
            let userInput = "";
            let filteredArray = []
        }
    }




    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <span className="puzzleText"></span>
                <input className="inputLine"></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterObjectRB"></span>
                <h4> "Filter Object" </h4>
            </div>
        )
    }
}