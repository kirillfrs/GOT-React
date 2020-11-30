import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
margin-top: 110px;
color:white;
text-align:center;
font-size: 43px;
`;

const Paragraph = styled.p`
margin-top: 60px;
color:white;
text-align:center;
font-size: 23px;
`;

export default function starterPage() {
    return (
        <>
            <Header>Welcome to GOT SITE </Header>
            <Paragraph>Choose what you want to know about GOT </Paragraph>
        </>
    )
}