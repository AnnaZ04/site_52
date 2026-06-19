import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <p>© 2026 Maison Meuble. Tous droits réservés.</p>

            <nav className='footer__links'>
                <Link to='/about'>À propos</Link>
                <Link to='/delivery'>Livraison</Link>
                <Link to='/guarantee'>Garantie</Link>
                <Link to='/contacts'>Contacts</Link>
            </nav>
        </footer>
    )
}

export default Footer