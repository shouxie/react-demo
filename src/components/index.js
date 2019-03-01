import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import '@/styles/index.css'
import styled from 'styled-components'
export default class extends Component {
    render() {
        /*const Title = styled.div`
            font-size: 20px;
            color: ${props => props.btn ? 'red' : 'blue'};
        `
        
        const Title1 = styled(Title)`
            margin-top: 90px
        `
        */
        /*const TitleExtends = Title1.extend`
            color: red
        `*/
        return <div>
            {/*<Title>test</Title>
            <Title btn>test</Title>
            <Title1>test</Title1>*/}
            {/*<TitleExtends>test</TitleExtends>*/}
            {this.props.children}
        </div>
    }
}