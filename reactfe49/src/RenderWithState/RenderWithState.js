import React, { Component } from 'react';

class RenderWithState extends Component {
    
        //quản lí những giá trị thay đổi trên giao diện 
        state = {
            login: false
        }

        //thuộc tính 
        // login = false;
        userName = 'tram';

        renderLogin = () => {
            if(this.state.login) {
                return <p>
                    Hello {this.userName}
                </p>
            }
            return <div> 
                <button className="btn btn-success" onclick={() => {
                    this.handleLogin();
                }}> Đăng nhập </button>
            </div>
        }
        handleLogin = () => {
            // this.state.login = true; không được gán state trực tiếp
            //phương thức setState => 
            //làm thay đổi giá trị state
            //gọi lại hàm render chạy lại 
            //setState là phương thức bất đồng bộ
            let newState = {login:true};
            this.setState(newState, () => {
                console.log(this.state.login);
            });
        }

    render() {
        return (
            <div className="container">
                {/* {this.login ? <p>Hello {this.userName}</p> : <div><button className="btn btn-success"> Đăng nhập</button></div> }  */}
                {this.renderLogin()}
            </div>
        );
    }
}

export default RenderWithState;