import React from "react";
import react from "react";
import CounterCard from "./counter-card";
import './counter.css';


export default function Counter() { 
    const [days, setDays] = react.useState(0);
    const [hours, setHours] = react.useState(0);
    const [minutes, setMinutes] = react.useState(0);
    const [seconds, setSeconds] = react.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const date = calculateCountdown('2024-01-01');
            date ? setDays(date.days) : clearInterval(interval);
            date ? setHours(date.hours) : clearInterval(interval);
            date ? setMinutes(date.minutes) : clearInterval(interval);
            date ? setSeconds(date.seconds) : clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
    },
    )

    const calculateCountdown = (endDate) => {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        if (diff <= 0) return false;

        const timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (diff >= 86400) {
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) {
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.minutes = Math.floor(diff / 60);
            diff -= timeLeft.minutes * 60;
        }

        timeLeft.seconds = diff;
        return timeLeft;
    };

    return (
            <div className="counter-wrapper">
                <CounterCard number={days} text="DAYS" />
                <CounterCard number={hours} text="HOURS" />
                <CounterCard number={minutes} text="MINUTES" />
                <CounterCard number={seconds} text="SECONDS" />
            </div>
    );
 }