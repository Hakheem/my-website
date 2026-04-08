import HeroSection from './_components/HeroSection'
import CoreValue from './_components/CoreValue'
import AboutSection from './_components/AboutSnippet'
import SelectedProjects from './_components/SelectedProjects'
import Testimonials from './_components/Testimonials'
import CTACard from '@/components/general/CTACard'
import ContactSection from './_components/ContactSection'

const MainHomePage = () => {
  return (
    <div>
      <HeroSection/>
      <CoreValue />
      <SelectedProjects />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <CTACard contactHref="/contact" />
      
    </div>
  )
}

export default MainHomePage