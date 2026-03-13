import { motion } from "framer-motion"

const galleryItems = [
  { title: "Weekend Vibes", size: "md:col-span-2 md:row-span-2", gradient: "from-orange-600/80 to-amber-900/90" },
  { title: "Fresh Off The Coals", size: "col-span-1 row-span-1", gradient: "from-red-600/80 to-red-900/90" },
  { title: "Ice Cold Drinks", size: "col-span-1 row-span-1", gradient: "from-blue-600/80 to-slate-900/90" },
  { title: "Live Music Nights", size: "col-span-1 row-span-2", gradient: "from-purple-600/80 to-indigo-900/90" },
  { title: "The Crowd", size: "col-span-1 row-span-1", gradient: "from-emerald-600/80 to-teal-900/90" },
  { title: "Premium Cuts", size: "md:col-span-2 row-span-1", gradient: "from-amber-500/80 to-orange-800/90" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            The <span className="text-primary">Vibe</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the energy and atmosphere at Mark's Pub.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px] md:h-[800px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${item.size}`}
            >
              {/* Placeholder abstract gradient since we don't have real photos */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center p-4 text-center backdrop-blur-[2px] group-hover:backdrop-blur-none">
                <h3 className="font-display text-2xl md:text-3xl text-white text-shadow-md translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
