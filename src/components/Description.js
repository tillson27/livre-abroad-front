import React, { useState } from 'react';
import Desc from '../assets/desc.png'
import styled from 'styled-components';


const Section = styled.section`
background-image: url(${Desc});
height: 785px;
display: block;
align: center;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: contain;
`;


export default function Description() {
    return (
        <div style={{ width: '100%' }}>
        <Section></Section>
        </div>
    )
}