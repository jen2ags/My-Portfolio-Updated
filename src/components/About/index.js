import React from 'react';
import profilePic from "../../assets/profile";

function About() {
    return (
        <section id="about-me">
            <h2 className="section-title">
                About Me
            </h2>
            <img src={profilePic} alt="Profile"/>
            <div>
            Hello! My name is Jennifer Jennings and I am thrilled to get into the world of coding and technology! I am a hard worker who loves learning new things! I recently decided to make a career change from teaching into coding and am loving it! I have experience running meetings and planning with teams to complete the tasks at hand. 
                On a personal note, I love hiking and exploring new places. My dog Bailey is always along for the ride when she can be!
            </div>
        </section>
        
    );
}

export default About;


      