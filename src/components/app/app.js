import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false,
    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        const { showRandomChar, error } = this.state;
        if (error) {
            return <ErrorMessage />
        }
        const randomChar = showRandomChar ? <RandomChar /> : null;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar}
                            <Button
                                onClick={this.toggleRandomChar}
                                color="primary" size="lg">Toggle Random Character
                                </Button>
                        </Col>
                    </Row>
                    <CharacterPage />

                </Container>
            </>
        );
    }

};

