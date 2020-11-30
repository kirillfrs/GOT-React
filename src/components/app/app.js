import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
// import CharacterPage from '../characterPage';
import { CharacterPage, BooksPage, HousesPage, BooksItem, starterPage } from '../pages'
import GotService from '../../services/gotServices';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';



export default class App extends Component {
    gotServices = new GotService();

    state = {
        showRandomChar: true,
        error: false,
        selectedHouse: 20

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
        const randomChar = showRandomChar ? <RandomChar interval={15000} /> : null;

        return (
            <Router>
                <div className="app">
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
                        <Route path='/' component={starterPage} exact />
                        <Route path="/characters" component={CharacterPage} />
                        <Route path="/houses" exact component={HousesPage} />
                        <Route path="/books" exact component={BooksPage} />
                        <Route path='/books/:id' render={({ match }) => {
                            const { id } = match.params;
                            return <BooksItem bookId={id} />
                        }} />

                    </Container>
                </div>
            </Router >
        );
    }

};

