import React, { Component } from 'react';

class BaiTapChonXe extends Component {

    //state là source tấm hình xe 
    state = {
        imgCar: './img/products/black-car.jpg '
    }

    handleChangeColorCar = (imgColor) => {
        //lấy img được click án vào state thông qua phương thức setState 
        this.setState ({
            imgCar: `./img/products/${imgColor}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row"> 
                    <div className="col-8">
                        <img style = {{width: '100%'}} src={this.state.imgCar}/>  
                    </div>
                    <div className="col-4">
                        <div className="card text-left">
                            <div className="card-header" >
                                Exterior Color
                            </div>
                            <div className="card-body">
                                <div onClick={() => {
                                    this.handleChangeColorCar('black')
                                }} className="row p-2 mt-2" style={{border: '1px solid #EEE', cursor: 'pointer'}}>
                                    <div className="image col-4"> 
                                        <img style = {{width: '100%'}} src="./img/icons/icon-black.jpg" />
                                    </div>
                                    <div className="col-8"> 
                                        <h5> Crystal Black</h5>
                                        <p> Pearl </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div onClick={() => {
                                   this.handleChangeColorCar('steel')
                                }}className="row p-2 mt-2" style={{border: '1px solid #EEE', cursor: 'pointer'}}>
                                    <div className="image col-4"> 
                                        <img style = {{width: '100%'}} src="./img/icons/icon-steel.jpg" />
                                    </div>
                                    <div className="col-8"> 
                                        <h5> Modern Steel </h5>
                                        <p> Metallic </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div onClick={() => {
                                   this.handleChangeColorCar('silver')
                                }}
                                className="row p-2 mt-2" style={{border: '1px solid #EEE', cursor: 'pointer'}}>
                                    <div className="image col-4"> 
                                        <img style = {{width: '100%'}} src="./img/icons/icon-silver.jpg" />
                                    </div>
                                    <div className="col-8"> 
                                        <h5> Lunar Silver</h5>
                                        <p> Metallic </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div onClick={() => {
                                    this.handleChangeColorCar('red')
                                }}className="row p-2 mt-2" style={{border: '1px solid #EEE', cursor: 'pointer'}}>
                                    <div className="image col-4"> 
                                        <img style = {{width: '100%'}} src="./img/icons/icon-red.jpg" />
                                    </div>
                                    <div className="col-8"> 
                                        <h5> Rallye Red</h5>
                                        <p> Metallic </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>   
                </div>
            </div>
        );
    }
}

export default BaiTapChonXe;