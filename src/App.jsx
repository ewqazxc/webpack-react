import React, { Component } from 'react' 
import ReactDOM from "react-dom";
import {
    Route,
    HashRouter,
    Link
} from 'react-router-dom' 

class App extends Component {
    constructor(props) {
        super(props)

    }
 
    render() {
        return (
            <div style={{textAlign:'center'}}>
                Hellow World ！
            </div>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById("root"));