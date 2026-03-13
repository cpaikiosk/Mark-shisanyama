import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const galleryItems = [
  {
    src: "gallery-interior-1.jpg",
    title: "The Atmosphere",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "gallery-food.jpg",
    title: "Fresh Off The Coals",
    size: "col-span-1 row-span-1",
  },
  {
    src: "gallery-exterior.jpg",
    title: "Welcome to Ko Papi",
    size: "col-span-1 row-span-1",
  },
  {
    src: "gallery-interior-2.jpg",
    title: "The Vibe Inside",
    size: "col-span-1 md:row-span-2",
  },
  {
    src: "gallery-photo.jpg",
    title: "Where People Gather",
    size: "col-span-1 row-span-1",
  },
  {
    src: "gallery-view.jpg",
    title: "Good Times",
    size: "col-span-1 row-span-1",
  },
  {
    src: "gallery-picture.jpg",
    title: "The Scene",
    size: "col-span-1 row-span-1",
  },
  {
    src: "gallery-award.jpg",
    title: "Windhoek Award Night 2026",
    size: "col-span-1 row-span-1",
  },
  {
    src: "gallery-event.jpg",
    title: "R200,000 Grand Prize Winners",
    size: "md:col-span-2 row-span-1",
  },
]

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 bg-card border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            The <span className="text-primary">Vibe</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real moments from Mark's Pub & Shisanyama — Ko Papi, Pretoria Hebron.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.size}`}
              onClick={() => setLightbox(`${import.meta.env.BASE_URL}images/${item.src}`)}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${item.src}`}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-500 flex items-end p-4">
                <h3 className="font-display text-lg md:text-xl text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          Follow us on{" "}
          <a href="https://www.instagram.com/markspub_and_shisanyama" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            @markspub_and_shisanyama
          </a>{" "}
          &{" "}
          <a href="https://www.tiktok.com/@markspubandshisanyama" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            @markspubandshisanyama
          </a>{" "}
          for more content.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={36} />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}
