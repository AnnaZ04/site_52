import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import './InfoPage.css'

function AboutPage() {
  return (
    <div className="info-page">
      <Header />
      <CategoryMenu />

      <main className="info-page__content">
        <section className="info-page__hero">
          <span>À propos</span>
          <h1>Maison Meuble, votre boutique de mobilier moderne</h1>
          <p>
            Maison Meuble est une boutique en ligne spécialisée dans les meubles
            élégants, confortables et fonctionnels. Notre objectif est d’aider
            chaque client à créer un intérieur harmonieux, pratique et chaleureux.
          </p>
        </section>

        <section className="info-page__grid">
          <article className="info-card">
            <h2>Notre mission</h2>
            <p>
              Proposer des meubles de qualité qui combinent design, confort et
              durabilité pour toutes les pièces de la maison.
            </p>
          </article>

          <article className="info-card">
            <h2>Notre style</h2>
            <p>
              Nous privilégions les lignes modernes, les matières naturelles et
              les couleurs faciles à intégrer dans différents intérieurs.
            </p>
          </article>

          <article className="info-card">
            <h2>Notre service</h2>
            <p>
              Nous accompagnons nos clients dans le choix des meubles, la
              livraison et le suivi de chaque commande.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage