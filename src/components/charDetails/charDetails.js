import React, { Component } from 'react';
import './charDetails.css';
import GotService from '../../services/gotServices';
import Spinner from '../spinner';
import styled from 'styled-components';
import { WarnText } from '../randomChar/randomChar'
import ErrorMessage from '../errorMessage';


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
    gotServices = new GotService();
    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }
    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    onError = () => {
        this.setState({
            char: null,
            error: true
        })
    }

    updateChar = () => {
        const { charId } = this.props;
        if (!charId) {
            return;
        }
        this.setState({
            loading: true
        })
        this.gotServices.getCharacter(charId)
            .then(this.onCharDetailsLoaded)
            .catch(() => this.onError)
    }


    render() {

        if (!this.state.char && this.state.error) {
            return <ErrorMessage />
        } else if (!this.state.char) {
            return (
                <>
                    <span className="select-error">Please select a character</span>
                </>)
        }


        const { name, gender, born, died, culture } = this.state.char;

        if (this.state.loading) {
            return (
                <CharDetailsWrapper>
                    <Spinner />
                </CharDetailsWrapper>
            )
        }


        return (
            <CharDetailsWrapper>
                <h4>{name}</h4>
                <ListGroup >
                    <ListGroupItem >
                        <WarnText>Gender</WarnText>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem >
                        <WarnText>Born</WarnText>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem >
                        <WarnText>Died</WarnText>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem >
                        <WarnText>Culture</WarnText>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsWrapper>
        );
    }
}

export { ListGroup, ListGroupItem };