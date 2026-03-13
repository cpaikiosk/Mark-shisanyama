import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Mark's Pub and Shisanyama Atmosphere"
          className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      </div>

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Pretoria Hebron
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white text-shadow-lg leading-none mb-6">
            Where Good Vibes <br/>
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Meet Great Food
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light text-shadow-md">
            Experience the ultimate local spot in Pretoria Hebron. 
            Cold drinks, authentic shisanyama, and memories waiting to be made.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto font-display text-xl px-10 h-14"
              onClick={() => scrollTo('#menu')}
            >
              View Our Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto font-display text-xl px-10 h-14 text-white border-white/30 hover:bg-white/10"
              onClick={() => scrollTo('#contact')}
            >
              Find Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-primary transition-colors cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollTo('#about')}
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  )
}
