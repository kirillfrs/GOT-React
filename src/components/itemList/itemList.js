import React, { Component } from 'react';
// import './itemList.css';
import { ListGroup, ListGroupItem } from '../charDetails/charDetails'
import styled from 'styled-components';

const ListGroupModifyed = styled(ListGroup)`
margin-top:40px;
`;
const ItemListPoint = styled(ListGroupItem)`cursor: pointer;`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroupModifyed >
                <ItemListPoint >
                    John Snow
                </ItemListPoint>
                <ItemListPoint>
                    Brandon Stark
                </ItemListPoint>
                <ItemListPoint>
                    Geremy
                </ItemListPoint>
            </ListGroupModifyed>
        );
    }
}