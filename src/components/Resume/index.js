import React from 'react';
import myResume from '../../assets/Resume/Jennifer_Jennings_Resume.pdf';

function Resume() {
    return (
        <li>
           <a href={myResume} download> Download My Resume</a>
        </li>
        
    );
}

export default Resume;
