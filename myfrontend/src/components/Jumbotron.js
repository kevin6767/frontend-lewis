import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import frontStore from '../assets/store.jpg'

const Styles = styled.div`
.jumbo {
    background: url(${frontStore}) no-repeat;
    background-size: cover;
    color: white;
    height: 200px;
    
    position: relative;
    z-index: -3;
   

}

.overlay {
    background-color: #black;
   
   
    postion: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

`;


export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
        <div className="welcome">
            <h1>Welcome</h1>
            <p>This is the first Markup</p>
            </div>
        </Container>
    </Jumbo>
    </Styles>
)