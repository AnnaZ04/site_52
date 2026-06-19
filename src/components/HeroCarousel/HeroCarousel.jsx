import {useState} from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import './HeroCarousel.css'

const slides = [
    {
    id: 1,
    title: 'Un intérieur élégant pour chaque maison',
    text: 'Découvrez nos collections de meubles modernes, confortables et durables.',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'Des meubles pensés pour votre quotidien',
    text: 'Armoires, tables, cuisines et chambres dans un style harmonieux.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Créez une maison chaleureuse',
    text: 'Choisissez des meubles qui rendent chaque pièce plus agréable.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
  },
]

function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slide = slides[currentSlide]

    const goToPreviousSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
    }

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length)
    }

    return (
        <section className='hero-carousel'
                style={{background: `url(${slide.image})`}}
        >
            <button
            className='hero-carousel__button hero-carousel__button--left'
            type='button'
            onClick={goToPreviousSlide}
            aria-label='Image précedente'>
                <ChevronLeft size={28}/>
            </button>

            <div className='hero-carousel__content'>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
            </div>

            <button
            className='hero-carousel__button hero-carousel__button--right'
            type='button'
            onClick={goToNextSlide}
            aria-label='Image suivante'>
                <ChevronRight size={28}/>
            </button>

            <div className='hero-carousel__dots'>
                {slides.map((item, index) => (
                    <button
                    key = {item.id}
                    type = 'button'
                    className= {
                        index === currentSlide
                        ? 'hero-carousel__dot hero-carousel__dot--active'
                        : 'hero-carousel__dot'
                    }
                    onClick={() => setCurrentSlide(index)}
                    aria-label= {`Aller à l'image ${index + 1}`}
                    />
                ))}

            </div>

        </section>
    )
}

export default HeroCarousel