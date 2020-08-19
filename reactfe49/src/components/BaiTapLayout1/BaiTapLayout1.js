import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div class="col-4"> 
                        <Menu />
                    </div>
                    <div class="col-8"> 
                        <Content />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
