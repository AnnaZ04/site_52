import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CategoryPage from '../pages/CategoryPage'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import OrdersPage from '../pages/OrdersPage'
import AboutPage from '../pages/AboutPage'
import DeliveryPage from '../pages/DeliveryPage'
import GuaranteePage from '../pages/GuaranteePage'
import ContactsPage from '../pages/ContactsPage'
import SalesPage from '../pages/SalesPage'
import ProductPage from '../pages/ProductPage'
import SearchPage from '../pages/SearchPage'

function AppRoutes() {
    return(
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path='/product/:productId' element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/guarantee" element={<GuaranteePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/search" element={<SearchPage />} />
        </Routes>
    )
}

export default AppRoutes