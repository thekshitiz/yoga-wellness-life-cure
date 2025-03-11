import Header from '@/components/header'
import Hero from '@/components/hero'
import YogaSection from '@/components/yoga-section'
import PlantSection from '@/components/plant-section'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <Hero />
            <YogaSection />
            <PlantSection />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}
