import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import { clearCart, removeFromCart, decreaseQuantity, increaseQuantity } from '../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import './CartPage.css'

function CartPage() {
  const dispatch = useDispatch ()
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items)

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <div className='cart-page'>
      <Header />
      <CategoryMenu />

      <main className='cart-page__content'>
        <div className='cart-page__header'>
          <span>Votre panier</span>
          <h1>Articles sélectionnés</h1>
        </div>

        {cartItems.length > 0 ? (
          <>
          <div className='cart-page__items'>
            {cartItems.map ((item) => (
              <article className='cart-item' key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className='cart-item__info'>
                  <h2>{item.name}</h2>
                  <div className='cart-item__quantity'>
                    <button type='button' onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button type='button' onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>
                  </div>
                  <strong>{item.price} €</strong>
                </div>

                <button type='button' onClick={() => dispatch(removeFromCart(item.id))}>
                  Supprimer
                </button>
              </article>
            )
          )}
          </div>

          <div className='cart-page__summary'>
            <h2>Total: {totalPrice} €</h2>

            <div className='cart-page__actions'>
              <button type='button' onClick={() => navigate('/orders')}>Commander</button>
              <button type='button' className='cart-page__clear' onClick={() => dispatch(clearCart())}>
                Vider le panier
              </button>
            </div>
          </div>
          </>
        ):(
          <p className='cart-page__empty'>Votre panier est vide.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default CartPage