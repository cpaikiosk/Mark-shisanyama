import { motion } from "framer-motion"
import { Beer, Flame, Music, MonitorPlay, Car } from "lucide-react"

const offerings = [
  {
    title: "Cold Drinks & Cocktails",
    description: "A fully stocked bar featuring premium spirits, local beers including Windhoek on tap, ice-cold ciders, and signature cocktails.",
    icon: Beer,
    color: "from-amber-500/20 to-orange-600/5",
    iconColor: "text-amber-500"
  },
  {
    title: "Authentic Shisanyama",
    description: "Premium cuts grilled over open flames — boerewors, chicken, lamb, beef and more. The real taste of South African braai culture.",
    icon: Flame,
    color: "from-red-500/20 to-orange-600/5",
    iconColor: "text-red-500"
  },
  {
    title: "Live Entertainment",
    description: "Soul, R&B and Amapiano from local and celebrity DJs. When you're at Ko Papi, the party never stops.",
    icon: Music,
    color: "from-purple-500/20 to-pink-600/5",
    iconColor: "text-purple-500"
  },
  {
    title: "Sports Screenings",
    description: "Catch every major match on our big screens. Surrounded by passionate fans, it's the next best thing to being in the stadium.",
    icon: MonitorPlay,
    color: "from-blue-500/20 to-cyan-600/5",
    iconColor: "text-blue-500"
  },
  {
    title: "Car Wash",
    description: "Get your car looking fresh while you enjoy your meal and drinks. A full car wash service right on site.",
    icon: Car,
    color: "from-green-500/20 to-teal-600/5",
    iconColor: "text-green-500"
  }
]

export function Offerings() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="offerings" className="py-24 bg-card border-y border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for an unforgettable experience — all under one roof in Hebron.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {offerings.map((offering, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-card rounded-xl border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <offering.icon className={`w-7 h-7 ${offering.iconColor}`} />
                </div>
                
                <h3 className="font-display text-xl text-foreground mb-3">{offering.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
