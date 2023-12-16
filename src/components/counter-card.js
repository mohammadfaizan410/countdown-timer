import React from "react";
import './counter-card.css';


export default function CounterCard({number, text}) {
    return (
        <div className="counter-card-wrapper">
            <div className="counter-item-number-wrapper">
                    <h1 className="counter-item-number">{number}</h1>
            </div>
        <div className="counter-item-text-wrapper">
            <p className="counter-item-text">{text}</p>
        </div>
        </div>
    )
}