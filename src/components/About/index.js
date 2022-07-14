import React from 'react';
import profilePic from "../../assets/profile/profile.jpg";

function About() {
    return (
        <section id="about-me">
            <h2 className="section-title">
                About Me
            </h2>
            <img src={profilePic} alt="Profile"/>
            <div>
            Hello! My name is Jennifer Jennings and I am thrilled to get into the world of business and technology!  
            I am making a transition from a fulfilling career in education to a business analyst concentrating on my strengths in math, problem solving, and organization in a digital environment. 
            As a young professional, I seek a company that is goal oriented, while continuing to make a difference in our community. I'm also looking for a dynamic company willing to invest in my growth where I can have a long and successful career partnership.
            
            </div>
        </section>
        
    );
}

export default About;


      