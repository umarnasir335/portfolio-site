import React from 'react';
import NavbarMenu from './Components/Navbar/Navbar.js'

import Profile from '../src/pics/0.jpg'
import styled from 'styled-components'

const Styles=styled.div`
.background{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: silver;
    z-index:-1;
}
.image{
    top:0;
    left:0;
    z-index:3;
    position:fixed;
    margin: 22px 0px 0px 15px;
    border: 3 px solid black;
    
}
`

const Home = function(){
    return(
    <Styles>
    <React.Fragment>
        <div className="background"></div>
        <header>
            <div className="image">
            <img src={Profile} alt='Profile'></img>
            </div>
            <title>Umar Nasir</title>
        <h1>Mission Statement</h1>
          <div><NavbarMenu /></div>
        <p>
           Umar Nasir
        </p>
        <a
          href="https://github.com/umarnasir335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
        </header>
    </React.Fragment>
    </Styles>
    );
}
export default Home;