import React from 'react';
import saved from './saved.png'

function Header()
{
    return (
        <header>
            <img src={saved} alt="meme"/>
        </header>
    );
}

export default Header;