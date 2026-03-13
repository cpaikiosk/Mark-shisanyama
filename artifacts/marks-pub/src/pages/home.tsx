import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Offerings } from "@/components/offerings"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
