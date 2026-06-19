import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import './AuthPage.css'

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } =event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Données de connexion:', formData);

    dispatch(
      login({
        email: formData.email,
        name: formData.email,
      })
    )

    navigate('/')
    
  }

  return(
    <div className='auth-page'>
      <Header />
      <CategoryMenu />

      <main className='auth-page__content'>
        <form className='auth-form' onSubmit={handleSubmit}>
          <span>Espace client</span>
          <h1>Connexion</h1>

          <label>
            Email
            <input 
              type="email"
              name='email'
              placeholder='votre@email.com'
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </label>

          <label>
            Mot de passe
            <input 
              type="password"
              name='password'
              placeholder='Votre mot de passe'
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </label>

          <button type='submit'>Se connecter</button>

          <p>Vous n’avez pas encore de compte ?{' '}
            <Link to="/register">Créer un compte</Link>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default LoginPage


