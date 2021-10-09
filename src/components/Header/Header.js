import React from 'react';

import './header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <h2 className="header__text">{ props.text }</h2>
        </header>
    );
}

export default Header;

