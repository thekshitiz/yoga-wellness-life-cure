import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Packages from '@/components/packages'
import Team from '@/components/team'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Packages />
                <Team />
            </main>
            <Footer />
        </>
    )
}
