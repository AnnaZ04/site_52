import Header from '../components/Header/Header'
import CategoryMenu from '../components/CategoryMenu/CategoryMenu'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import IntroSection from '../components/IntroSection/IntroSection'
import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection'
import WhyChooseSection from '../components/WhyChooseSection/WhyChooseSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'



function HomePage() {
  return (
    <>
      <Header />
      <CategoryMenu />
      <HeroCarousel />
      <IntroSection />
      <AdvantagesSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default HomePage