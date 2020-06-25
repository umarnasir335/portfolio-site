import React, { Component } from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import banner from './banner1.jpg'

const Styles=styled.div`
@import url(https://fonts.googleapis.com/css?family=Federo);

.jumbo{
    background: url(${banner}) fixed;
    background size: cover;
    color: #ccc;
    text-align: center;
    height: 250px;
    font-family: federo;
    color: rgb(50,240,120);
    font-size: 45px;
    position: relative;
    z-index: 2;
    width: 100%;

}

.overlay{
    background-color: rgb(120,217,110);
    opacity: 0.25;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(50,240,180);
    position: absolute;
    width: 2500px;
    margin-top: 175px;
    padding-top: 120px;
    margin-bottom: 10px;
    top: -20%;
    left: -10%;
    bottom: 50%;
    right: 0;
    z-index: 3;
}

`;


export const Jumbotron = () =>(

    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className = "overlay"></div>
            <Container>
                Web Development using the latest Web Tech.
            </Container>
        </Jumbo>
    </Styles>
) 
