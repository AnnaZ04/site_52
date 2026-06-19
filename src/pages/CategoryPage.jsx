import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import { categories } from '../shared/data/categories'
import { products } from '../shared/data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import './CategoryPage.css'

function CategoryPage() {
  const { categoryId } = useParams()

  const dispatch = useDispatch()

  const currentCategory = categories.find(
    (category) => category.id === categoryId,
  )

  const categoryProducts = products.filter(
    (product) => product.categoryId === categoryId,
  )

  return (
    <div className="category-page">
      <Header />
      <CategoryMenu />

      <main className="category-page__content">
        <div className="category-page__header">
          <span>Catégorie</span>
          <h1>{currentCategory ? currentCategory.name : 'Catégorie'}</h1>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="category-page__grid">
            {categoryProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`} className="product-card__image-link">
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="product-card__content">
                  <span>{currentCategory?.name}</span>
                  <h3>{product.name}</h3>

                  <div className="product-card__bottom">
                    <strong>{product.price} €</strong>
                    <button type="button" onClick={() => dispatch(addToCart(product))}>
                      Ajouter
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="category-page__empty">
            Aucun produit trouvé dans cette catégorie.
          </p>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default CategoryPage