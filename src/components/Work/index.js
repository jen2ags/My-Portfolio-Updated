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
        <section id="my-work">
            <h2 className="section-title">My Work</h2>
            <div>
                <article className="large-tile">
                    <a href="https://github.com/jen2ags/Med-Portal">
                        <img src={medportal} alt="" width="400" height="400"></img>
                    </a>
                </article>
                <article className="small-tiles">
                    <a href="https://jen2ags.github.io/Karaoke-Kings/">
                        <img src={karaokeKings} alt="" width="150" height="300"></img>
                    </a>
                    <a href="https://github.com/jen2ags/Note-Taker">
                        <img src={notetaker} alt="" width="150" height="300"></img>
                    </a>
                </article>
                <article class="small-tiles">
                    <a href="https://jen2ags.github.io/Work-day-scheduler/">
                        <img src={workDayScheduler} alt=""  width="150" height="300"></img>
                    </a>
                    <a href="https://jen2ags.github.io/run-buddy/">
                        <img src={runBuddy} alt=""  width="150" height="300"></img>
                    </a>
                </article>    
                <article class="small-tiles">
                    <a href="https://jen2ags.github.io/robot-gladiators/">
                        <img src={robotGladiators} alt=""  width="150" height="300"></img>
                    </a>
                    <a href="https://jen2ags.github.io/Module-01-Challenge/">
                        <img src={horiseon} alt=""  width="150" height="300"></img>
                    </a> 
                </article>
            </div>
        </section>
    )
}

export default Work;

