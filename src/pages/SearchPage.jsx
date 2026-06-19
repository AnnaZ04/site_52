import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import { products } from '../shared/data/products'
import { categories } from '../shared/data/categories'
import './SearchPage.css'

function SearchPage() {
  const [searchParams] = useSearchParams()

  const query = searchParams.get('query') || ''

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  )

  const getCategoryName = (categoryId) => {
    const category = categories.find((item) => item.id === categoryId)
    return category ? category.name : 'Catégorie'
  }

  return (
    <div className="search-page">
      <Header />
      <CategoryMenu />

      <main className="search-page__content">
        <div className="search-page__header">
          <span>Recherche</span>
          <h1>Résultats pour “{query}”</h1>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="search-page__grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`} className="product-card__image-link">
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="product-card__content">
                  <span>{getCategoryName(product.categoryId)}</span>
                  <h3>{product.name}</h3>

                  <div className="product-card__bottom">
                    <strong>{product.price} €</strong>
                    <Link to={`/product/${product.id}`}>Voir</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="search-page__empty">
            Aucun produit ne correspond à votre recherche.
          </p>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default SearchPage