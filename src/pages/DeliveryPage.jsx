import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import './InfoPage.css'

function DeliveryPage() {
  return (
    <div className="info-page">
      <Header />
      <CategoryMenu />

      <main className="info-page__content">
        <section className="info-page__hero">
          <span>Paiement et livraison</span>
          <h1>Des conditions simples pour recevoir vos meubles facilement</h1>
          <p>
            Nous proposons des solutions de paiement pratiques et une livraison
            organisée avec soin afin que chaque commande arrive dans les
            meilleures conditions.
          </p>
        </section>

        <section className="info-page__grid">
          <article className="info-card">
            <h2>Paiement sécurisé</h2>
            <p>
              Vous pouvez régler votre commande par carte bancaire, virement ou
              paiement à la livraison selon les conditions disponibles.
            </p>
          </article>

          <article className="info-card">
            <h2>Livraison organisée</h2>
            <p>
              Notre équipe contacte le client pour confirmer l’adresse, la date
              et l’heure de livraison avant l’expédition.
            </p>
          </article>

          <article className="info-card">
            <h2>Suivi de commande</h2>
            <p>
              Après validation, vous recevez les informations importantes pour
              suivre l’état de votre commande.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default DeliveryPage