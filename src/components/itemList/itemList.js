import React, {Component} from 'react';
// import './itemList.css';
import {ListGroup,ListGroupItem} from '../charDetails/charDetails'
import styled from 'styled-components';


const ItemListPoint=styled(ListGroupItem)`cursor: pointer;`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup >
                <ItemListPoint >
                    John Snow
                </ItemListPoint>
                <ItemListPoint>
                    Brandon Stark
                </ItemListPoint>
                <ItemListPoint>
                    Geremy
                </ItemListPoint>
            </ListGroup>
        );
    }
}