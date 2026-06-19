import './WhyChooseSection.css'

function WhyChooseSection() {
    return (
        <section className='why-choose'>
            <div
            className='why-choose__image'
            style={{
                backgroundImage:'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80)',
            }}/>

            <div className='why-choose__content'>
                <span>Inspiration maison</span>
                <h2>Créez votre intérieur idéal</h2>
                 <p>
                    Associez les couleurs, les matières et les formes pour composer un
                    espace harmonieux. Nos collections vous aident à imaginer un salon,
                    une chambre ou une cuisine qui vous ressemble.
                 </p>
            </div>

            <div
              className='why-choose__image'
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80)',
              }}
            />
        </section>
    )
}

export default WhyChooseSection