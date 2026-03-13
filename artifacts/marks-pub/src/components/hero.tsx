import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronDown, Trophy, Star } from "lucide-react"

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Dark gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto w-full"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt="Mark's Pub & Shisanyama Logo"
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover shadow-2xl border-4 border-primary/50"
            />
          </motion.div>

          {/* Award winner badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-4 py-1.5 px-4 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold tracking-wide backdrop-blur-sm"
          >
            <Trophy size={14} />
            Windhoek Real Beer, Real Food — R200,000 Grand Prize Winners 2026
          </motion.div>

          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Pretoria Hebron · Ko Papi
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white text-shadow-lg leading-none mb-4">
            Where Good Vibes <br/>
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Meet Great Food
            </span>
          </h1>

          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-4 font-light text-shadow-md">
            Authentic shisanyama, ice-cold drinks, live entertainment & great community vibes.
            Open daily from 10 AM to 2 AM on M20 Hebron Road, Pretoria.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} className="text-primary fill-primary" />
              ))}
              <Star size={16} className="text-primary fill-primary opacity-30" />
            </div>
            <span className="text-white/70 text-sm">4.3 on Google · 569+ reviews · #10 of 900 pubs in Pretoria</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.tiktok.com/embed/v2/7302155816629456133?autoplay=1&muted=1"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Mark's Pub & Shisanyama — SAMA28 Celebration"
                style={{ border: "none" }}
              />
            </div>
            <p className="text-white/50 text-sm mt-3 text-center">
              Mark's Pub & Shisanyama — Live at Ko Papi 🔥
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-20 mt-8 mb-4 text-white/50 hover:text-primary transition-colors cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollTo('#about')}
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  )
}
