import { Link } from "react-router-dom";
import "../Styles/Nav-style.scss";

const Navigation = () => {
    return (
        <section>
            <div className="navbar">
                <div className="NavLogo">
                    <h1>History-Fact</h1>
                </div>
                <div className="NavMenu">
                    <div className="NavItem">
                        <Link className={"nav-link"} to="/">
                            Accueil
                        </Link>
                    </div>
                    <div className="NavItem">
                        <Link className={"nav-link"} to="/fact">
                            Faits Historiques
                        </Link>
                    </div>
                    <div className="NavItem">
                        <Link className={"nav-link"} to="/customization">
                            Personnalisation
                        </Link>
                    </div>
                </div>
                <div className="NavFooter">
                    <p className="NavFooterItem">Nous Contacter</p>
                    <p className="NavFooterItem">Envoyer vos faits</p>
                </div>
            </div>
        </section>
    );
};
export default Navigation;
