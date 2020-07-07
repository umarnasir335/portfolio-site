import React from 'react';
import styled from 'styled-components'
import NavbarMenu from '../src/Components/Navbar/Navbar'

const Styles = styled.div`
.background{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity: 90%;
        background-color: rgb(28,27,25);
        z-index:-1;
    }
    
.resume1{
        position: relative;
        text-align:center;
        font: italic 1.6em "Fira Sans", serif;
        color: rgb(200,200,200);
`;
 export const Portfolio = () =>{
        return(
<Styles>
        <div className='background'></div>
           <div className="resume1">
            <h1>Web Development, Design and Deployment</h1>
            <h2>Self-taught Web-Developer specializing in:</h2>
            <ul>
                <li>Front End Design using the latest JS frameworks</li>
                <li>Responsive Websites and Web Applications</li>
                <li>React, Node.js, Express, SQL, DevOps, </li>
            </ul>
            
            </div>
</Styles>
            )
    }
