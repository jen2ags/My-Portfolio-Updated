import React from 'react';
import medportal from '../../assets/medportal/medportal.png';
import horiseon from '../../assets/Horiseon/horiseon.png';
import karaokeKings from '../../assets/karaoke-kings/karaoke-kings.png';
import notetaker from '../../assets/note-taker/note-taker.png';
import robotGladiators from '../../assets/robot-gladiators/robot-gladiators.png';
import runBuddy from '../../assets/run-buddy/run-buddy.png';
import workDayScheduler from '../../assets/work-day-scheduler/work-day-scheduler.png';

function Work() {
    return (
        <section id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div>
                <article className="large-tile">
                <img src={medportal} alt="" width="400" height="400"></img>
                    <div id="large-tile-links">
                        <a href="https://github.com/jen2ags/Med-Portal">GitHub Repository</a>
                        <a href="https://ancient-tor-23586.herokuapp.com/">Deployed Application</a>
                    </div>
                </article>
                <article className="small-tiles">
                    <img src={karaokeKings} alt="" width="150" height="300"></img>
                    <img src={notetaker} alt="" width="150" height="300"></img>
                    <div id="small-tile-links">
                        <a href="https://github.com/jen2ags/Karaoke-Kings">GitHub Repository</a>
                        <a href="https://jen2ags.github.io/Karaoke-Kings/">Deployed Application</a>
                    
                        <a href="https://github.com/jen2ags/Note-Taker">GitHub Repository</a>
                        <a href="https://afternoon-tor-27473.herokuapp.com/notes">Deployed Application</a>
                    </div>
                </article>
                <article className="small-tiles">
                    <img src={workDayScheduler} alt=""  width="150" height="300"></img>
                    <img src={runBuddy} alt=""  width="150" height="300"></img>

                    <div id="small-tile-links">
                        <a href="https://github.com/jen2ags/Work-day-scheduler">GitHub Repository</a>
                        <a href="https://jen2ags.github.io/Work-day-scheduler/">Deployed Application</a>


                        <a href="https://github.com/jen2ags/run-buddy">GitHub Repository</a>
                        <a href="http://lernantino.github.io/run-buddy/">Deployed Application</a>
                    </div>
                </article>    
                <article className="small-tiles">
                    <img src={robotGladiators} alt=""  width="150" height="300"></img>
                    <img src={horiseon} alt=""  width="150" height="300"></img>

                    <div id="small-tile-links">
                        <a href="https://github.com/jen2ags/robot-gladiators">GitHub Repository</a>
                        <a href="https://jen2ags.github.io/robot-gladiators/">Deployed Application</a>


                        <a href="https://github.com/jen2ags/Module-01-Challenge">GitHub Repository</a>
                        <a href="https://jen2ags.github.io/Module-01-Challenge/">Deployed Application</a>
                    </div>


                  
                </article>
            </div>
        </section>
    )
}

export default Work;

