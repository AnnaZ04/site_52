import { Link, useNavigate } from 'react-router-dom'
import { Search, Phone, Clock, ShoppingCart, User } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { logout } from '../../features/auth/authSlice'
import './Header.css'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = (event) => {
    event.preventDefault()

    if (searchValue.trim()) {
      navigate(`/search?query=${searchValue}`)
      setSearchValue('')
    }
  }

  const cartItems = useSelector((state) => state.cart.items)

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <div className="header__logo-icon">M</div>
        <div>
            <h2>Maison Meuble</h2>
             <p>Meubles pour votre maison</p>
        </div>
      </Link>

      <div className="header__content">
        <nav className="header__top-menu">
          <Link to="/sales">Promotions</Link>
          <Link to="/about">À propos</Link>
          <Link to="/orders">Commandes</Link>
          <Link to="/delivery">Paiement et livraison</Link>
          <Link to="/guarantee">Garantie</Link>
          <Link to="/contacts">Contacts</Link>
          {user ? (
            <button
              type="button"
              className="header__login header__login-button"
              onClick={() => dispatch(logout())}
            >
              <User size={16} />
              {user.name}
            </button>
          ) : (
            <Link to="/login" className="header__login">
              <User size={16} />
              Connexion / Inscription
            </Link>
            )}
        </nav>

        <div className="header__bottom-row">
          <form className='header__search' onSubmit={handleSearchSubmit}>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Rechercher" 
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)} 
            />
          </form>

          <div className="header__info">
            <Phone size={18} />
            <span>+33 1 45 67 89 10</span>
          </div>

          <div className="header__info">
            <Clock size={18} />
            <span>9:00 - 20:00</span>
          </div>

          <Link to="/cart" className="header__cart">
            <ShoppingCart size={20} />
            Panier ({cartCount})
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header