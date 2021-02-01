import React from 'react'
import { useRef, useState, useEffect } from 'react';


function Timer() {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('December 26 2020 19:00:00').getTime();

        interval = setInterval(() => {
            var now = new Date;
            var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            
            const difference = countdownDate - nowUTC; 

            const days =  Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            
            if(difference < 0) {
                // stop timer 
                clearInterval(interval.current); 
                return("End")
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
            
        },1000)
    }

    // compontentDidMount
    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current); 
        };
    })
    return (
        <section className ="timer-container mx-auto w-6/6 py-8 pt-14 bg-gradient-to-tr from-gray-900 via-black-800 to-black-900">
            <section className ="timer text-center">
                <div className="text-white">
                    <span className="text-white mdi mdi-calendar-clock text-4xl timer-icon"> </span>
                    <h3 className="text-2xl sm:text-3xl md:text-3xl py-4 pb-12"> LIGGERS BALL LIVE IN</h3>

                <div className="flex flex-row justify-center w-6/6 justify-evenly"> 
                    <section className="text-2xl md:text-3xl"> 
                        <p>{timerDays}</p>
                        <small> <p>Days</p></small>
                    </section>

                    <section className="text-2xl md:text-3xl"> 
                        <p>{timerHours}</p>
                        <small> <p>Hours</p></small>
                    </section>

                    <section className="text-2xl md:text-3xl"> 
                        <p>{timerMinutes}</p>
                        <small> <p>Minutes</p></small>
                    </section>

                    <section className="text-2xl md:text-3xl"> 
                        <p>{timerSeconds}</p>
                       <small> <p>Seconds</p></small>
                    </section>
                    </div>
                </div>
            </section>

           
        </section>
    )
}

export default Timer;