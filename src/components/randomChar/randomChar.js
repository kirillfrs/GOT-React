import React, { Component } from 'react';
// import './randomChar.css';
import { ListGroup, ListGroupItem } from '../itemDetails/itemDetails'
import gotService from '../../services/gotServices';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage'
import PropTypes from 'prop-types';

const RandomBlock = styled.div`
  background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem ;

    h4{
        margin-bottom: 20px;
    text-align: center;
    }
    img{
        width: 100%;
    }
`;

const WarnText = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    static defaultProps = {
        interval: 15000
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar = () => {
        console.log('updateChar')
        const id = Math.floor(Math.random() * 180 + 25); // 25 до 180
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <RandomBlock >
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

// RandomChar.propTypes = {
//     interval: (props, propName, componentName) => {
//         const value = props[propName];
//         if (typeof value === 'number' && ~isNaN(value)) {
//             return null
//         }
//         return new TypeError(`${componentName}: ${propName} should be a number`);
//     }
// }
RandomChar.propTypes = {
    interval: PropTypes.number
}
const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ListGroup>
                <ListGroupItem>
                    <WarnText>Gender </WarnText>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <WarnText>Born </WarnText>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <WarnText>Died </WarnText>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem>
                    <WarnText>Culture </WarnText>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}

export { WarnText };