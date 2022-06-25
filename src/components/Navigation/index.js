import React from 'react';

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
                    <li>
                        <a href="#my-work" onClick={() => handleClick()}>
                            My Work
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