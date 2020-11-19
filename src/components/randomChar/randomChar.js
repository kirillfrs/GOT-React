import React, { Component } from 'react';
// import './randomChar.css';
import { ListGroup, ListGroupItem } from '../charDetails/charDetails'

import styled from 'styled-components';

const RandomBlock = styled.div`
  background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem ;

    h4{
        margin-bottom: 20px;
    text-align: center;
    }
`;

const WarnText = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock >
                <h4>Random Character: John</h4>
                <ListGroup>
                    <ListGroupItem>
                        <WarnText>Gender </WarnText>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <WarnText>Born </WarnText>
                        <span>11.03.1039</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <WarnText>Died </WarnText>
                        <span>13.09.1089</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <WarnText>Culture </WarnText>
                        <span>Anarchy</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}

export {WarnText};