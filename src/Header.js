import "./styles.css";
import Globe from "./images/globe.svg";

function Header() {
    return(
        <header className="header">
            <img className="header__image" src={Globe} alt="globe"/>
            <p className="header__text">my travel journal.</p>
        </header>
    )
}

export default Header;