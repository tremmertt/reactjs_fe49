import React, { Component } from 'react';
import './Styling.scss';
import style from './Styling.module.scss';
class Child extends Component {
    render() {
        //let objectiveStyle = {borderColor: 'red'}
        return (
            <div>
                <div className={`${style.contentScss}`}>
                    <p className={`${style.text}`}> 2222 </p>
                    child component
                </div>
                    <p style={{borderColor: 'red', background:'black', fontSize:'15px', border: '5px solid red'}}> Hello </p>
                
            </div>      
        )
    }
}

export default Child;