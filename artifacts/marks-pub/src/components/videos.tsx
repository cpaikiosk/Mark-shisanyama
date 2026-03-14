import { motion } from "framer-motion"
import { Play, Film } from "lucide-react"

const featuredVideos = [
  {
    src: "featured-video-1.mp4",
    title: "Mark's Pub Live Vibes",
  },
  {
    src: "featured-video-2.mp4",
    title: "Shisanyama Highlights",
  },
]

const tiktokVideos = [
  {
    id: "7516981533270396216",
    user: "markspubandshisanyama",
    caption: "Live highlights — Amapiano vibes at Ko Papi",
    tag: "Official",
  },
  {
    id: "7505799520844909830",
    user: "markspubandshisanyama",
    caption: "Soulmate food straight from the grill",
    tag: "Official",
  },
  {
    id: "7302155816629456133",
    user: "markspubandshisanyama",
    caption: "Transformed Space — SAMA28 Celebration",
    tag: "Official",
  },
  {
    id: "7427217370986401029",
    user: "markspubandshisanyama",
    caption: "Sunday sessions — closing out the year right",
    tag: "Official",
  },
  {
    id: "7503567379893341445",
    user: "malumfoodie",
    caption: "\"Had an amazing time at Mark's pub and Shisanyama in Hebron\"",
    tag: "Fan",
  },
  {
    id: "7473605736489045303",
    user: "kgantshochabalala",
    caption: "Thank you Mark's Pub & Shisanyama",
    tag: "Fan",
  },
]

export function Videos() {
  return (
    <section id="videos" className="py-24 bg-background border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            <Play size={14} className="fill-primary" />
            Videos
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            See The <span className="text-primary">Energy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real videos from Mark's Pub & Shisanyama and the community. Follow{" "}
            <a
              href="https://www.tiktok.com/@markspubandshisanyama"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              @markspubandshisanyama
            </a>{" "}
            for more.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Film size={18} className="text-primary" />
            <h3 className="font-display text-xl text-foreground tracking-wide">Featured</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold">
              Owner
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredVideos.map((video, i) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col gap-3"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border-2 border-primary/30 shadow-lg shadow-primary/10">
                  <video
                    src={`${import.meta.env.BASE_URL}images/${video.src}`}
                    className="w-full aspect-[9/16] object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
                <p className="text-sm text-muted-foreground px-1 font-medium">{video.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Play size={18} className="text-primary fill-primary" />
            <h3 className="font-display text-xl text-foreground tracking-wide">TikTok Moments</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiktokVideos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border" style={{ paddingBottom: "177.78%" }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${video.id}`}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="encrypted-media"
                    title={video.caption}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-2 px-1">
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-semibold ${video.tag === "Official" ? "bg-primary/20 text-primary border border-primary/30" : "bg-muted text-muted-foreground border border-border"}`}>
                    {video.tag}
                  </span>
                  <p className="text-sm text-muted-foreground leading-snug">{video.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
