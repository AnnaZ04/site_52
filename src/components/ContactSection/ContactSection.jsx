import {Link} from 'react-router-dom'
import {Mail, MapPin, Phone} from 'lucide-react'
import './ContactSection.css'

const footerCategories = [
  { id: 'armoires', name: 'Armoires' },
  { id: 'tables-chaises', name: 'Tables et chaises' },
  { id: 'enfants', name: 'Meubles pour enfants' },
  { id: 'cuisines', name: 'Cuisines' },
  { id: 'chambre', name: 'Meubles de chambre' },
  { id: 'bureau', name: 'Mobilier de bureau' },
]

function ContactSection() {
    return (
        <section className='contact-section'>
            <div className='contact-section__menu'>
                <h2>Catégories</h2>
            <nav>
                {footerCategories.map((category) => (
                    <Link key= {category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                ))}
            </nav>
            </div>

            <div className='contact-section__info'>

                <div className='contact-section__brand'>
                    <div className='contact-section__logo'>M</div>
                    <div>
                        <h2>Maison Meuble</h2>
                        <p>Meubles modernes pour une maison confortable</p>
                    </div>
                </div>
                
                <div className='contact-section__contacts'>
                    <div>
                        <Phone size={20}/>
                        <span>+33 1 45 67 89 10</span>
                    </div>
                    <div>
                        <Mail size={20} />
                        <span>Paris, France</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection