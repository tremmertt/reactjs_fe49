import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('hello');
    }

    showInfo = (name) => {
        alert(`name ${name}`)
    }
    render() {

        return (
            <div className="container">
                {/* Cách 1: Truyền callback function thông qua thuộc tính */}
                <button onClick={this.handleClick}> click me </button> 
                
                {/* Cách 2: dùng arrow function */}
                <button onClick= {() => {
                    alert('hello');
                    //click vào gọi nhiều hàm thực hiện ...
                    this.handleClick();
                }}> show message </button> 
                <br /> 
                <button onClick={() => {
                    this.showInfo('hello');
                }}> show info </button> 

            </div>
        )
    }
}
