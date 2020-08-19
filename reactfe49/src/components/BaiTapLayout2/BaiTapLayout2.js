import React, { Component } from 'react'
import HeaderComponent from '../BaiTapLayout1/HeaderComponent'
import SliderComponent from '../BaiTapLayout1/SliderComponent'
import ProductListComponent from './ProductListComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <SliderComponent />
                <ProductListComponent />
                <FooterComponent />
            </div>
        )
    }
}
