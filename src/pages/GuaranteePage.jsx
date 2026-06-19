import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import './InfoPage.css'

function GuaranteePage() {
  return (
    <div className="info-page">
      <Header />
      <CategoryMenu />

      <main className="info-page__content">
        <section className="info-page__hero">
          <span>Garantie</span>
          <h1>Une garantie pensée pour votre tranquillité</h1>
          <p>
            Nous sélectionnons des meubles fiables et durables. Si un problème
            apparaît après l’achat, notre équipe vous accompagne pour trouver
            une solution rapide et adaptée.
          </p>
        </section>

        <section className="info-page__grid">
          <article className="info-card">
            <h2>Qualité contrôlée</h2>
            <p>
              Chaque produit est vérifié selon nos critères de qualité avant
              d’être proposé dans notre boutique.
            </p>
          </article>

          <article className="info-card">
            <h2>Assistance client</h2>
            <p>
              En cas de question ou de difficulté, notre service client vous
              répond et vous guide dans les démarches nécessaires.
            </p>
          </article>

          <article className="info-card">
            <h2>Retour possible</h2>
            <p>
              Selon les conditions de vente, certains produits peuvent être
              retournés ou échangés après validation de la demande.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default GuaranteePage