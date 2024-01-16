import React, { useState, useEffect } from "react";
import "../Styles/Fact-style.scss";

import Image1 from "../media/Image1.png";
import Image2 from "../media/Image2.png";
import Image3 from "../media/Image3.png";
import Image4 from "../media/Image4.png";
import Image5 from "../media/Image5.png";
import Image6 from "../media/Image6.png";
import Image7 from "../media/Image7.png";
import Image8 from "../media/Image8.png";
import Image9 from "../media/Image9.png";
import Image10 from "../media/Image10.png";
import Image11 from "../media/Image11.png";
import Image12 from "../media/Image12.png";
import Image13 from "../media/Image13.png";
import Image14 from "../media/Image14.png";
import Image15 from "../media/Image15.png";
import Image16 from "../media/Image16.png";
import Image17 from "../media/Image17.png";
import Image18 from "../media/Image18.png";
import Image19 from "../media/Image19.png";

const Timeline = () => {
    const events = [
        {
            year: "14 octobre 1066",
            title: "Bataille de Hastings",
            event: "Bataille de Hastings : Guillaume le Conquérant, duc de Normandie, défait le roi Harold II d'Angleterre, marquant le début de la dynastie normande en Angleterre.",
            image: Image1,
            
        },
        {
            year: "4 juillet 1776",
            title: "Déclaration d'indépendance des États-Unis",
            event: "Déclaration d'indépendance des États-Unis : Les représentants des Treize Colonies déclarent leur indépendance vis-à-vis de la Grande-Bretagne, donnant naissance aux États-Unis d'Amérique.",
            image: Image2,
        },
        {
            year: "14 juillet 1789",
            title: "Prise de la Bastille",
            event: "Prise de la Bastille : Les Parisiens prennent d'assaut la prison de la Bastille, symbolisant le début de la Révolution française contre la monarchie absolue.",
            image: Image3,
        },
        {
            year: "15 juin 1815",
            title: "Bataille de Waterloo",
            event: "Bataille de Waterloo : Napoléon Bonaparte est défait par les forces coalisées à Waterloo, mettant fin à ses ambitions impériales.",
            image: Image4,
        },
        {
            year: "6 avril 1917",
            title: "Entrée des États-Unis dans la Première Guerre mondiale",
            event: "Entrée des États-Unis dans la Première Guerre mondiale : Les États-Unis rejoignent les Alliés dans la Première Guerre mondiale en réponse aux attaques de sous-marins allemands.",
            image: Image5,
        },
        {
            year: "7 décembre 1941",
            title: "Attaque de Pearl Harbor",
            event: "Attaque de Pearl Harbor : Les forces japonaises attaquent la base navale américaine de Pearl Harbor à Hawaï, entraînant l'entrée des États-Unis dans la Seconde Guerre mondiale.",
            image: Image6,
        },
        {
            year: "6 juin 1944",
            title: "Débarquement de Normandie",
            event: "Débarquement de Normandie : Les Alliés lancent une opération amphibie massive en Normandie, France, ouvrant un second front en Europe pendant la Seconde Guerre mondiale.",
            image: Image7,
        },
        {
            year: "15 août 1945",
            title: "Capitulation du Japon",
            event: "Capitulation du Japon : Le Japon se rend, mettant fin à la Seconde Guerre mondiale après les bombardements atomiques de Hiroshima et Nagasaki.",
            image: Image8,
        },
        {
            year: "4 octobre 1957",
            title: "Lancement de Spoutnik 1",
            event: "Lancement de Spoutnik 1 : L'Union soviétique lance le premier satellite artificiel, Spoutnik 1, inaugurant l'ère spatiale.",
            image: Image9,
        },
        {
            year: "20 juillet 1969",
            title: "Premier pas de l'homme sur la lune",
            event: "Premier pas de l'homme sur la lune : L'astronaute américain Neil Armstrong devient le premier homme à marcher sur la lune lors de la mission Apollo 11.",
            image: Image10,
        },
        {
            year: "9 novembre 1989",
            title: "Chute du mur de Berlin",
            event: "Chute du mur de Berlin : Le mur qui divisait Berlin-Est et Berlin-Ouest est abattu, symbolisant la fin de la guerre froide et la réunification allemande.",
            image: Image11,
        },
        {
            year: "11 septembre 2001",
            title: "Attentats du 11 septembre 2001",
            event: "Attentat terrosiste : Des terroristes d'Al-Qaïda détournent des avions de ligne, attaquant les tours jumelles du World Trade Center à New York et le Pentagone à Washington, D.C.",
            image: Image12,
        },
        {
            year: "1er mai 2004",
            title: "Élargissement de l'Union européenne",
            event: "Élargissement de l'Union européenne : Dix nouveaux pays rejoignent l'Union européenne, marquant une expansion significative de l'organisation.",
            image: Image13,
        },
        {
            year: "30 avril 1975",
            title: "Fin de la guerre du Viêt Nam",
            event: "Fin de la guerre du Viêt Nam : Les forces nord-vietnamiennes capturent Saïgon, mettant fin à la guerre du Viêt Nam.",
            image : Image14,
        },
        {
            year: "26 avril 1986",
            title: "Explosion de la centrale nucléaire de Tchernobyl",
            event: "Explosion de la centrale nucléaire de Tchernobyl : Un réacteur nucléaire explose à Tchernobyl, en Ukraine, provoquant le pire accident nucléaire de l'histoire.",
            image : Image15,
        },
        {
            year: "5 juin 1967",
            title: "Début de la guerre des Six Jours",
            event: "Début de la guerre des Six Jours : Israël lance des attaques préventives contre ses voisins arabes, remportant une victoire rapide au cours de la guerre des Six Jours.",
            image : Image16,
        },
        {
            year: "11 mars 2011",
            title: "Séisme et tsunami au Japon",
            event: "Séisme et tsunami au Japon : Un violent séisme suivi d'un tsunami dévaste la côte nord-est du Japon, entraînant l'accident nucléaire de Fukushima.",
            image : Image17,
        },
        {
            year: "28 juin 1919",
            title: "Signature du Traité de Versailles",
            event: "Signature du Traité de Versailles : Mettant officiellement fin à la Première Guerre mondiale, le traité de paix est signé à Versailles, près de Paris.",
            image : Image18,
        },
        {
            year: "6 août 1945",
            title: "Lancement de la bombe atomique sur Hiroshima",
            event: "Lancement de la bombe atomique sur Hiroshima : Les États-Unis larguent une bombe atomique sur Hiroshima, accélérant la fin de la Seconde Guerre mondiale.",
            image : Image19,
        },
    ];

    // Function to get a random event
    const getRandomEvent = () => {
        const randomIndex = Math.floor(Math.random() * events.length);
        return events[randomIndex];
    };

    // State to hold the current event
    const [currentEvent, setCurrentEvent] = useState(getRandomEvent());

    // Effect to update the current event when the component mounts
    useEffect(() => {
        setCurrentEvent(getRandomEvent());
    }, []);

    return (
        <div className="timeline-container">
            <div className="eventNew">
                <button
                    className="btn"
                    onClick={() => setCurrentEvent(getRandomEvent())}
                >
                    Un autre fait
                </button>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="year">{currentEvent.year}</span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
            <div className="selected-event">
                <div className="eventDesc">
                    <h1 className="eventDate">{currentEvent.year}</h1>
                    <h2 className="eventTitle">{currentEvent.title}</h2>
                    <p className="eventText">{currentEvent.event}</p>
                </div>
                <div className="eventImg">
                    <img
                        src={currentEvent.image}
                        alt={currentEvent.title}
                        className="eventImgDetail"
                    />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
