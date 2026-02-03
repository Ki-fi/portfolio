import './Accessibility.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {Link} from "react-router-dom";

function Accessibility() {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main className="accessibility-wrapper">
            <h2 className='subheading accessibility-title'>Toegankelijkheids<wbr/>verklaring</h2>
            <article className='accessibility-section'>
                <span className='subtitle'>Toegankelijkheid</span>
                <p className='default-body-text'>Deze website is conform aan de WCAG 2.1 niveau AA, zoals vereist door de European Accessibility Act (EAA). Sommige functies of externe onderdelen kunnen nog verbeterd worden. Op de website wordt rekening gehouden met:</p>
                <br/>
                <ul className='accessibility-list'>
                    <li className='default-body-text'>Voldoende kleurcontrast voor goede leesbaarheid</li>
                    <li className='default-body-text'>Een logische en semantische structuur met correcte koppen</li>
                    <li className='default-body-text'>Alternatieve teksten bij afbeeldingen</li>
                    <li className='default-body-text'>Toegankelijke formulieren en interactieve elementen</li>
                    <li className='default-body-text'>Volledige bediening via het toetsenbord</li>
                    <li className='default-body-text'>Regelmatige controles met automatische toegankelijkheidstools, zoals Google Lighthouse</li><br/>
                </ul>
                <p className='default-body-text'>Ondanks deze maatregelen kan het voorkomen dat bepaalde onderdelen nog niet optimaal functioneren met alle vormen van assistieve technologie of dat externe onderdelen, zoals ingesloten content of plugins van derden, niet volledig voldoen aan alle toegankelijkheids<wbr/>richtlijnen. Ik streef ernaar deze beperkingen waar mogelijk te verhelpen of te beperken.</p>
            </article>
            <article className='accessibility-section'>
                <span className='subtitle'>Feedback</span>
                <p className='default-body-text'>Ondervind je problemen met de toegankelijkheid of heb je vragen? <Link to='#' onClick={(e) => {
                    window.location.href = "mailto:mail@kikimeekels.nl";
                    e.preventDefault();
                }}>Neem dan contact op</Link>.</p>
            </article>
            <article className='accessibility-section'>
                <span className='subtitle'>Wettelijk kader</span>
                <p className='default-body-text'>Kikimeekels.nl is een persoonlijke website waarop diensten als freelancer worden aangeboden. In sommige gevallen geldt een uitzondering voor micro-ondernemingen binnen de EAA. Desondanks blijf ik de website verbeteren waar mogelijk. Bij ontevredenheid over de afhandeling van een toegankelijkheidsmelding kun je contact opnemen met de <Link to='https://www.acm.nl'>Autoriteit Consument & Markt (ACM)</Link></p>
            </article>
        </main>
            <footer>
                <Footer />
            </footer>
            </>
    )
}

export default Accessibility;