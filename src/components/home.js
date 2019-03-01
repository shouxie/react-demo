import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
//import '@/styles/index.css'
import styled from 'styled-components'
import Head from './Header/index'
export default class extends Component {
    render() {
        return <div>
            <Head/>
            <Link to="detail">detail</Link>
    
            <Link to="login">去登录</Link>
            {this.props.children}
        </div>
    }
}