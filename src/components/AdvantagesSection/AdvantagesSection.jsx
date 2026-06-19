import { Truck, ShieldCheck, Sofa, Headphones } from 'lucide-react'
import './AdvantagesSection.css'

const advantages =[
    {
    id: 1, 
    icon: Truck,
    title: 'Livraison rapide',
    text: 'Nous livrons vos meubles rapidement et avec soin dans toute la ville.',
    },

    {
    id: 2,
    icon: ShieldCheck,
    title: 'Garantie qualité',
    text: 'Chaque produit est sélectionné pour sa durabilité et sa fiabilité.',
    },

    {
    id: 3,
    icon: Sofa,
    title: 'Grand choix',
    text: 'Des collections pour le salon, la chambre, la cuisine et le bureau.',
    },

    {
    id: 4,
    icon: Headphones,
    title: 'Conseil personnalisé',
    text: 'Notre équipe vous aide à choisir les meubles adaptés à votre intérieur.',
  },
]

function AdvantagesSection() {
    return(
        <section className='advantages-section'>
            <div className='advantages-section__header'>
                <span>Nos avantages</span>
                <h2>Pourquoi nos clients choisissent Maison Meuble</h2>
            </div>

            <div className='advantages-section__grid'>
                {advantages.map((advantage) => {
                    const Icon = advantage.icon

                    return(
                        <article className='advantages-section__card' key={advantage.id}>
                            <div className="advantages-section__icon">
                              <Icon size={34} />
                            </div>

                            <h3>{advantage.title}</h3>
                            <p>{advantage.text}</p>

                        </article>
                    )
                })}

            </div>

        </section>
    )
}

export default AdvantagesSection