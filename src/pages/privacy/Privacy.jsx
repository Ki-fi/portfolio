import './Privacy.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {Link} from "react-router-dom";

function Privacy() {
    return (
        <div className="privacy-page">
            <header>
                <Header/>
            </header>
            <main className="privacy-wrapper">
                <h2 className='subheading privacy-title'>Privacyverklaring</h2>
                <article className='privacy-section'>
                    <p className='default-body-text'>Kikimeekels.nl is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring. Heb je vragen over deze privacyverklaring of de verwerking van persoonsgegevens? <Link to='#' onClick={(e) => {
                    window.location.href = "mailto:k.meekels@gmail.com";
                    e.preventDefault();
                    }}>Neem dan contact op</Link>.</p>
                </article>
                <article className='privacy-section'>
                    <span className='subtitle'>Verwerking van persoonsgegevens</span>
                    <p className='default-body-text'>Kikimeekels.nl verwerkt uitsluitend persoonsgegevens die bezoekers vrijwillig verstrekken wanneer zij contact opnemen via e-mail. Dit kan onder meer betrekking hebben op:</p><br/>
                <ul className='accessibility-list'>
                    <li className='default-body-text'>Naam en e-mailadres</li>
                    <li className='default-body-text'>De inhoud van het bericht</li>
                    <li className='default-body-text'>Eventuele overige persoonsgegevens die de afzender zelf verstrekt</li><br/>
                </ul>
                <p className='default-body-text'>Deze gegevens worden uitsluitend gebruikt voor het beantwoorden en afhandelen van de betreffende correspondentie. Persoonsgegevens worden niet verkocht of verstrekt aan derden, tenzij dit noodzakelijk is voor de uitvoering van de dienstverlening, voortvloeit uit een wettelijke verplichting of nodig is voor de technische werking van de website.</p><br/>
                <p className='default-body-text'>Persoonsgegevens die via e-mail worden ontvangen, worden niet langer bewaard dan noodzakelijk is voor het afhandelen van de betreffende correspondentie, tenzij een langere bewaartermijn wettelijk verplicht is.</p>
                </article>
                <article className='privacy-section'>
                    <span className='subtitle'>Technische gegevens</span>
                    <p className='default-body-text'>De website maakt gebruik van externe dienstverleners. Zowel voor hosting en domeinbeheer en om een consistente weergave van lettertypen mogelijk te maken (Google Fonts). In het kader van het leveren, beveiligen en onderhouden van de website en het laden van lettertypen kunnen technische gegevens worden verwerkt, waaronder:</p>
                    <br/>
                    <ul className='accessibility-list'>
                        <li className='default-body-text'>IP-adres</li>
                        <li className='default-body-text'>Browser- en apparaatgegevens</li>
                        <li className='default-body-text'>Server- en logbestanden</li><br/>
                    </ul>
                    <p className='default-body-text'>Deze gegevens worden uitsluitend verwerkt voor technische, beveiligings- en operationele doeleinden. Tevens zijn de privacyvoorwaarden van Google van toepassing.</p>
                </article>
                <article className='privacy-section'>
                    <span className='subtitle'>Cookies</span>
                    <p className='default-body-text'>Kikimeekels.nl maakt geen gebruik van trackingcookies, marketingcookies of analytische cookies. Mogelijk worden door de hostingprovider of andere technische infrastructuur uitsluitend functionele of technisch noodzakelijke cookies geplaatst. Deze cookies zijn noodzakelijk voor het correct functioneren en beveiligen van de website en vereisen op grond van de toepasselijke wetgeving geen voorafgaande toestemming.</p>
                </article>
                <article className='privacy-section'>
                    <span className='subtitle'>Rechten</span>
                    <p className='default-body-text'>Op grond van de Algemene Verordening Gegevensbescherming (AVG) hebben betrokkenen het recht om:</p><br/>
                    <ul className='accessibility-list'>
                        <li className='default-body-text'>Inzage te vragen in de verwerkte gegevens</li>
                        <li className='default-body-text'>Onjuiste persoonsgegevens te laten corrigeren</li>
                        <li className='default-body-text'>Persoonsgegevens te laten verwijderen</li>
                        <li className='default-body-text'>Bezwaar te maken tegen de verwerking van persoonsgegevens</li>
                        <li className='default-body-text'>Beperking van de verwerking te verzoeken</li>
                        <li className='default-body-text'>Een klacht in te dienen bij de bevoegde toezichthouder</li>
                    </ul>
                </article><br/>
                <p><i>Laatste update: 10 juni 2026</i></p>
                </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Privacy;