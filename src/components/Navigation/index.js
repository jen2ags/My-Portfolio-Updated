import React from 'react';
import Resume from '../Resume';

function Navigation() {

const handleClick = () => {
    console.log("click handled")
}

return (
    <header>
        <h1>Jennifer Jennings</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me" onClick={() => handleClick()}>
                            About Me
                        </a>
                    </li>
                    <Resume></Resume>
                    <li>
                        <a href="#portfolio" onClick={() => handleClick()}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact-me" onClick ={() => handleClick()}>
                            Contact Me
                            </a>
                    </li>
                </ul>
            </nav>
    </header>
);
}

export default Navigation;