import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import Footer from '../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import './AuthPage.css'

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(formData.password !== formData.confirmPassword) {
      setError ('Les mots de passe ne correspondent pas.')
      return
    }
    setError('')

    console.log('Données d’inscription:', formData);
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  dispatch(
  login({
    email: formData.email,
    name: `${formData.firstName} ${formData.lastName}`,
  }),
)

navigate('/')

  return(
    <div className='auth-page'>
      <Header />
      <CategoryMenu />

      <main className='auth-page__content'>
        <form className='auth-form' onSubmit={handleSubmit}>
          <span>Espace client</span>
          <h1>Inscription</h1>
          {error && <p className="auth-form__error">{error}</p>}

          <label>
            Prénom
            <input
              type="text"
              name="firstName"
              placeholder="Votre prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nom
            <input
              type="text"
              name="lastName"
              placeholder="Votre nom"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
           </label>

           <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
           </label>

           <label>
            Mot de passe
            <input
              type="password"
              name="password"
              placeholder="Créez un mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
           </label>

           <label>
            Confirmer le mot de passe
            <input
              type="password"
              name="confirmPassword"
              placeholder="Répétez le mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
           </label>

           <button type='submit'>Créer un compte</button>

           <p>
            Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
           </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default RegisterPage