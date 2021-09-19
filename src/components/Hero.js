import React from 'react'
import styled from 'styled-components';
import BgImg from '../assets/sample.png'

const Section = styled.section`
background-image: url(${BgImg});
height: 785px;
display: block;
align: center;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: contain;
`;
const Content = styled.div`
width: 100%;
height: 100px;
align: center;
justify-content: center;
align-items: center;
`;
const Left = styled.div`
align: center;
justify-content: center;
align-items: center;
display: grid;
padding-top: 10%;
`;
const Title = styled.p`
font-size: 32px;
color: black;
font-weight: 400;
padding-left: 10%
`;
const Desc = styled.p`
width: 472px;
font-size: 20px;
color: black;
line-height: 30px;
margin-top: 0px;
padding-left: 120px;
`;
const Button = styled.a`
justify-content: center;
align-items: center;
border-radius: 18px;
margin-top: 20px;
width: 200px;
height: 50px;
line-height: 50px;
font-size: 18px;
text-align: center;
color: #fff;
cursor: pointer;
background: #1E96FC;
text-decoration: none;
box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
margin-left: 30%;
`;

const Hero = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Are you ready to explore the world?
                    </Title>
                    <Desc>
                        Start your adventure with LivreAbroad
                    </Desc>
                    <Button href=''>
                        <span>Learn More</span>
                    </Button>
                </Left>
            </Content>
        </Section >
    )
}

export default Hero
