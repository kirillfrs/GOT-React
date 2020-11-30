import React, { Component } from 'react';
import GotService from '../../services/gotServices';
import ItemDetails, { Field } from '../itemDetails';

export default class BooksItem extends Component {
    gotServices = new GotService();
 
    render() {
        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotServices.getBook} >
                <Field field='authors' label='Authors' />
                <Field field='numberOfPages' label='NumberOfPages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='released' />
            </ItemDetails>
        )
    }
}