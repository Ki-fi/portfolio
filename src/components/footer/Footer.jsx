import './Footer.css';
import Button from "../button/Button.jsx";
import keyboard from "/src/assets/Keyboard.png";

function Footer( { setCursorType } ) {

    return (
        <footer className="footer">
            <article>
                <img src={keyboard} alt="keyboard"/>
                <span className='subheading'>Van concept tot implementatie</span>
                <p>In de strijd tegen digitale uniformiteit maak ik van ideeën op papier,
                    karaktervolle, betekenisvolle en functionele producten.</p>
                <p>Plan een gratis kennismaking in</p>
                <Button
                    type="button"
                    variant="primary"
                    onClick={() => {}}
                    buttonText="nu emailen"
                    setCursorType={setCursorType}/>
            </article>
            <div className='quick_links'>
                <p>KVK: 99018071 | BTW: NL005367679B66 | <a href={()=>{}}>Privacy</a> | <a href={()=>{}}>Toegankelijkheid</a></p>
            </div>
        </footer>
    )

}

export default Footer;