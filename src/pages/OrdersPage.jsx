import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import './OrdersPage.css'

function OrdersPage() {
  const cartItems = useSelector ((state) => state.cart.items)

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    comment: '',
  })

  const [isOrderSuccess, setIsOrderSuccess] = useState(false)

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const handleChange = (event) => {
    const {name, value} = event.target 

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const orderData = {
      customer: formData,
      products: cartItems,
      total: totalPrice,
    }

    console.log('Nouvelle commande:', orderData)

    setIsOrderSuccess(true)
    dispatch(clearCart())
    
  }

  return(
    <div className='orders-page'>
      <Header />
      <CategoryMenu />

      <main className='orders-page__content'>
        <div className='orders-page__header'>
          <span>Commande</span>
          <h1>Finaliser la commande</h1>
        </div>

        {isOrderSuccess ? (
          <div className='ordders-page__success'>
            <h2>Merci pour votre commande!</h2>
            <p>
              Votre demande a été enregistrée. Notre manager vous contactera bientôt
              pour confirmer les détails de livraison.
            </p>
          </div>
        ) : cartItems.length > 0 ? (
          <div className='orders-page__layout'>
            <form className='order-form' onSubmit={handleSubmit}>
              <label>
                Nom complet
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
               </label>

               <label>
                Téléphone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
               </label>

               <label>
                Ville
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
               </label>

               <label>
                Adresse
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
               </label>

               <label>
                Commentaire
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="4"
                />
               </label>

               <button type='submit'>Confirmer la commande</button>
            </form>

            <aside className='order-summary'>
              <h2>Votre commande</h2>

              <div className='order-summary__items'>
                {cartItems.map((item) => (
                  <div className='order-summary__item' key={item.id}>
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <strong>{item.price * item.quantity} €</strong>
                  </div>
                ))}
              </div>

              <div className='order-summary__total'>
                <span>Total</span>
                <strong>{totalPrice}</strong>
              </div>
            </aside>
          </div>
        ) : (
          <p className='orders-page__empty'>
            Votre panier est vide. Ajoutez des produits avant de passer une commande.
          </p>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default OrdersPage