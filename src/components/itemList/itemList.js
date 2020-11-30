import React, { Component } from 'react';
// import './itemList.css';
import { ListGroup, ListGroupItem } from '../itemDetails/itemDetails'
import styled from 'styled-components';
import Spinner from '../spinner';
import PropTypes from 'prop-types';

const ListGroupModifyed = styled(ListGroup)`
margin-top:40px;
`;
const ItemListPoint = styled(ListGroupItem)`cursor: pointer;`;

export default class ItemList extends Component {
    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({ itemList })
            })
    }

    renderItems(arr) {

        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <ItemListPoint
                    onClick={() => this.props.onItemSelected(id)}
                    key={id} >
                    {label}
                </ItemListPoint>
            )
        })
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList)

        return (
            <ListGroupModifyed >
                {items}
            </ListGroupModifyed>
        );
    }
}

ItemList.PropTypes = {
    onItemSelected: PropTypes.func,
}