import "../Styles/Home-style.scss";

const Home = () => {
    return (
        <section>
            <div id="homeSection">
                <div className="boxhomeH1">
                    <h1 id="homeH1">Bienvenue sur History-Fact</h1>
                </div>
                <div className="boxQuestion">
                <div className="h3box"><h3>Qu’est ce que c’est ?</h3></div>
                    <div className="pQuestionbox"><p>
                        Plongez dans l'histoire chaque jour avec History-Fact,
                        une application web captivante qui vous transporte à
                        travers le temps en révélant les événements historiques
                        qui se sont déroulés à la même heure, il y a plusieurs
                        années. Explorez le passé et découvrez les moments
                        marquants qui ont façonné le cours de l'histoire, tout
                        cela en un seul clic. Rejoignez-nous pour un voyage
                        fascinant à travers les époques sur la première page de
                        notre site web !
                    </p></div>
                </div>

                <div className="boxQuestion">
                    <div className="h3box"><h3>Comment ça marche ?</h3></div>
                    <div className="pQuestionbox"><p>
                        Découvrez l'histoire comme jamais auparavant en
                        explorant notre page dédiée aux faits historiques sur
                        History-Fact. Chaque heure, plongez dans des événements
                        captivants du passé, accompagnés de leurs dates et de
                        détails fascinants. Rejoignez-nous dans cette aventure
                        temporelle et restez à l'affût des derniers faits
                        historiques qui ont marqué le monde. Chaque visite est
                        une immersion unique dans le passé, alors ne manquez pas
                        l'occasion de découvrir l'histoire à chaque clic !
                    </p></div>
                    
                </div>
            </div>
        </section>
    );
};

export default Home;
