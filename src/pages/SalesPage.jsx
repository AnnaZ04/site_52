import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import './InfoPage.css'

function SalesPage() {
  return (
    <div className="info-page">
      <Header />
      <CategoryMenu />

      <main className="info-page__content">
        <section className="info-page__hero">
          <span>Promotions</span>
          <h1>Offres spéciales pour renouveler votre intérieur</h1>
          <p>
            Découvrez nos offres du moment sur une sélection de meubles pour le
            salon, la chambre, la cuisine et le bureau.
          </p>
        </section>

        <section className="info-page__grid">
          <article className="info-card">
            <h2>-15% sur les armoires</h2>
            <p>
              Profitez d’une réduction sur une sélection d’armoires modernes et
              pratiques pour organiser votre espace.
            </p>
            <Link to="/category/armoires">Voir les armoires</Link>
          </article>

          <article className="info-card">
            <h2>Livraison offerte</h2>
            <p>
              La livraison est offerte pour certaines commandes selon le montant
              total et la zone de livraison.
            </p>
            <Link to="/delivery">Voir les conditions</Link>
          </article>

          <article className="info-card">
            <h2>Offres bureau</h2>
            <p>
              Créez un espace de travail confortable avec nos bureaux et meubles
              de rangement sélectionnés.
            </p>
            <Link to="/category/bureau">Voir le mobilier</Link>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SalesPage