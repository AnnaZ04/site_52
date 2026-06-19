import { Mail, MapPin, Phone } from 'lucide-react'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import './InfoPage.css'

function ContactsPage() {
  return (
    <div className="info-page">
      <Header />
      <CategoryMenu />

      <main className="info-page__content">
        <section className="info-page__hero">
          <span>Contacts</span>
          <h1>Contactez Maison Meuble</h1>
          <p>
            Notre équipe est disponible pour répondre à vos questions, vous
            conseiller dans le choix des meubles et vous accompagner pendant
            votre commande.
          </p>
        </section>

        <section className="info-page__grid">
          <article className="info-card">
            <h2>
              <Phone size={22} /> Téléphone
            </h2>
            <p>+33 1 45 67 89 10</p>
          </article>

          <article className="info-card">
            <h2>
              <Mail size={22} /> Email
            </h2>
            <p>contact@maisonmeuble.fr</p>
          </article>

          <article className="info-card">
            <h2>
              <MapPin size={22} /> Adresse
            </h2>
            <p>Paris, France</p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactsPage