import './Privacy.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Privacy() {
    return (
        <div className="privacy-page">
            <header>
                <Header/>
            </header>
            <main className="privacy-wrapper">
                <h2 className='subheading privacy-title'>Privacyverklaring</h2>
                <article className='privacy-section'>
                    <span className='subtitle'>Inleiding</span>
                    <p className='default-body-text'>...</p>
                </article>
                </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Privacy;