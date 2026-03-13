import { motion } from "framer-motion"
import { ImagePlus } from "lucide-react"

export function Gallery() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <ImagePlus size={48} className="text-primary/40 mb-4" />
          <p className="text-muted-foreground text-lg">Photos coming soon</p>
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-4">
          Follow us on{" "}
          <a href="https://www.instagram.com/marks_pubshisanyama" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            @marks_pubshisanyama
          </a>{" "}
          &{" "}
          <a href="https://www.tiktok.com/@markspubandshisanyama" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            @markspubandshisanyama
          </a>{" "}
          for more content.
        </p>
      </div>
    </section>
  )
}
