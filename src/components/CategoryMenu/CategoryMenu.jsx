import {useState} from 'react'
import {Link} from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './CategoryMenu.css'

const categories = [
    { id:'armoires', name: 'Armoires' },
    { id: 'tables-chaises', name: 'Tables et chaises' },
    { id: 'enfants', name: 'Meubles pour enfants' },
    { id: 'cuisines', name: 'Cuisines' },
    { id: 'chambre', name: 'Meubles de chambre' },
    { id: 'bureau', name: 'Mobilier de bureau' },
]

function CategoryMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='category-menu'>
            <button
              type='button'
              className='category-menu__button'
              onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
                <span>Catégories</span>
            </button>
            <div
              className={`category-menu__links ${
              isOpen ? 'category-menu__links--open' : ''
              }`}
            >
            {categories.map((category) => (
                <Link
                key = {category.id}
                to={`/category/${category.id}`}
                className='category-menu__link'
                >
                {category.name}
                </Link>
            ))}
            </div>
        </nav>
    )
}

export default CategoryMenu