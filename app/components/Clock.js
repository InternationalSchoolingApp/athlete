'use client';
import React, { useEffect } from 'react';

const Clock = () => {
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const milliseconds = now.getMilliseconds();
            const hourHand = document.getElementById('hourHand');
            const minuteHand = document.getElementById('minuteHand');
            const secondHand = document.getElementById('secondHand');
            const hourRotation = (hours % 12) * 30 + minutes / 2;
            const minuteRotation = minutes * 6 + seconds / 10;
            const secondRotation = seconds * 6 + milliseconds * 0.006;
            if (hourHand && minuteHand && secondHand) {
                hourHand.style.transform = `rotate(${hourRotation}deg)`;
                minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
                secondHand.style.transform = `rotate(${secondRotation}deg)`;
            }
        };

        const interval = setInterval(updateClock, 1000);
        updateClock();
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="clock relative min-h-[90px] rounded-full min-w-[90px] flex items-center justify-center"
        >
            <div id="hourHand" className="absolute top-0 overflow-hidden h-1/2 pt-5 origin-bottom">
                <div className="w-[3px] h-full rounded-xl bg-current"></div>
            </div>
            <div id="minuteHand" className="absolute top-0 rounded-xl overflow-hidden bg-current h-1/2 w-[1px] origin-bottom"></div>
            <div id="secondHand" className="absolute top-0 rounded-xl overflow-hidden bg-red-500 h-1/2 w-[0.5px] origin-bottom"></div>
        </div>
    );
};

export default Clock;

