import React from 'react';
import NavbarMenu from './Components/Navbar/Navbar.js'

import Profile from '../src/pics/0.jpg'
import styled from 'styled-components'

import Link from 'next/link';
 /* import {AiFillGithub, AiFillInstagram, AiFillLinkedIn} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/ai'; */


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
    top:2em;
    left: 2em;
    z-index:3;
    position: fixed;
    margin: 0px 0px 0px 0px;
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
        <NavbarMenu />
            <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1> React.js || SQL || C++ || Firebase</h1>
            </div>
        <div>  
          <a style={{display: 'flex', justifyContent: 'center'}}
          href="https://github.com/umarnasir335"
          target="_blank"
          rel="noopener noreferrer"
          >
          Github Link
          </a>
          </div>
        </header>
    </React.Fragment>
    </Styles>
    );
}
export default Home;