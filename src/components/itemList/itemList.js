import React, { Component } from 'react';
// import './itemList.css';
import { ListGroup, ListGroupItem } from '../charDetails/charDetails'
import styled from 'styled-components';
import GotService from '../../services/gotServices';
import Spinner from '../spinner';

const ListGroupModifyed = styled(ListGroup)`
margin-top:40px;
`;
const ItemListPoint = styled(ListGroupItem)`cursor: pointer;`;

export default class ItemList extends Component {
    gotServices = new GotService();
    state = {
        charList: null
    }

    componentDidMount() {
        this.gotServices.getAllCharacters()
            .then((charList) => {
                this.setState({ charList })
            })
    }

    renderItems(arr) {
        
        return arr.map((item, i,arr) => {
            return (
                <ItemListPoint
                    onClick={() => this.props.onCharSelected(41 + i)}
                    key={i} >
                    {item.name}
                </ItemListPoint>
            )
        })
    }

    render() {
        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }

        const items = this.renderItems(charList)

        return (
            <ListGroupModifyed >
                {items}
            </ListGroupModifyed>
        );
    }
}