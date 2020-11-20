import React, { Component } from 'react';
// import './charDetails.css';

import styled from 'styled-components';
import { WarnText } from '../randomChar/randomChar'

const CharDetailsWrapper = styled.div`
margin-top:40px;
  background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
    margin-bottom: 20px;
    text-align: center;
    }
`;

const ListGroup = styled.ul`
display: flex;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
li{
    display:flex;
    border-right-width: 0;
border-left-width: 0;
border-radius: 0;
justify-content: space-between ;
:first-child{
    border-top-width:0;
}
+li{
    border-top-width: 0;
}
}

`;
const ListGroupItem = styled.li`
position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  li:first-child{ border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;}
  li:last-child{
    border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  }
`;


export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsWrapper>
                <h4>John Snow</h4>
                <ListGroup >
                    <ListGroupItem >
                        <WarnText>Gender</WarnText>
                        <span>male</span>
                    </ListGroupItem>
                    <ListGroupItem >
                        <WarnText>Born</WarnText>
                        <span>1783</span>
                    </ListGroupItem>
                    <ListGroupItem >
                        <WarnText>Died</WarnText>
                        <span>1820</span>
                    </ListGroupItem>
                    <ListGroupItem >
                        <WarnText>Culture</WarnText>
                        <span>First</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsWrapper>
        );
    }
}

export { ListGroup, ListGroupItem };