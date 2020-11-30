import React, { Component } from 'react';
// import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotServices';
import RowBlock from '../rowBlock';



export default class CharacterPage extends Component {
    gotServices = new GotService();

    state = {
        selectedChar: 130,
        error: false

    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                getData={this.gotServices.getAllCharacters}
                renderItem={(item) => `${item.name} - (${item.gender}) `} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.gotServices.getCharacter}>
                <Field field="gender"
                    label="Gender"
                />
                <Field field="born"
                    label="Born"
                />
                <Field field="died"
                    label="Died"
                />
                <Field field="culture"
                    label="Culture"
                />
            </ItemDetails>

        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }

}