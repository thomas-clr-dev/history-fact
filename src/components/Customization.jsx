import "../Styles/Custom-style.scss";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Customization = () => {
    const currentYear = new Date().getFullYear();
    const [yearRange, setYearRange] = useState({ min: 800, max: 1900 });

    const [activeHours, setActiveHours] = useState({
        start: "08:00",
        end: "17:00",
    });

    const handleStartChange = (event) => {
        setActiveHours((prevState) => ({
            ...prevState,
            start: event.target.value,
        }));
    };

    const handleEndChange = (event) => {
        setActiveHours((prevState) => ({
            ...prevState,
            end: event.target.value,
        }));
    };

    return (
        <section className="Customization">
            <div className="boxCustomH1">
                <h1>Personnalisation</h1>
            </div>
            <div className="boxCustomRange">
                <h2>Choisissez une période</h2>
                <br />
                <InputRange
                    minValue={0}
                    maxValue={currentYear}
                    value={yearRange}
                    onChange={(value) => setYearRange(value)}
                    step={10}
                />
                <p>
                    Plage d'années sélectionnée : {yearRange.min} -{" "}
                    {yearRange.max}
                </p>
            </div>
            <div className="boxCustomHours">
                <h2>Heures d'activité</h2>
                <div id="HAlign">
                    <label>
                        Début :
                        <input
                            type="time"
                            value={activeHours.start}
                            onChange={handleStartChange}
                        />
                    </label>
                    <label>
                        Fin :
                        <input
                            type="time"
                            value={activeHours.end}
                            onChange={handleEndChange}
                        />
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Customization;
