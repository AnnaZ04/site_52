import {useParams} from 'react-router-dom'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import { categories} from '../shared/data/categories'
import { products } from '../shared/data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import './ProductPage.css'

function ProductPage() {
    const {productId} = useParams()

    const dispatch = useDispatch()

    const product = products.find((item) => item.id === Number(productId))

    if(!product){
        return(
            <>
            <Header />
            <CategoryMenu />
            <main className='product-page__content'>
                <h1>Produit introuvable</h1>
            </main>
            <Footer />
            </>
        )
    }

    const category = categories.find((item) => item.id === product.categoryId)

    return (
        <div className='product-page'>
            <Header />
            <CategoryMenu />

            <main className='product-page__content'>
                <div className='product-page__image'>
                    <img src={product.image} alt={product.name} />
                </div>

                <div className='product-page__details'>
                    <span className='product-page__category'>{category?.name}</span>
                    <h1>{product.name}</h1>

                    <p className='product-page__description'>
                        Un meuble élégant et pratique, conçu pour apporter confort,
                        fonctionnalité et style à votre intérieur.
                    </p>

                    <div className='product-page__price'>{product.price} €</div>

                    <button
                      type="button"
                      className="product-page__button"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Ajouter au panier
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default ProductPage