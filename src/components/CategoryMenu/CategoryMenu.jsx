import {Link} from 'react-router-dom'
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
    return (
        <nav className='category-menu'>
            {categories.map((category) => (
                <Link
                key = {category.id}
                to={`/category/${category.id}`}
                className='category-menu__link'
                >
                {category.name}
                </Link>
            ))}
        </nav>
    )
}

export default CategoryMenu