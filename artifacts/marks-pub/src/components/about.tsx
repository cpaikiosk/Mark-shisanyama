import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Decorative texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-xl" />
            <img 
              src={`${import.meta.env.BASE_URL}images/about-pub.png`}
              alt="Inside Mark's Pub" 
              className="relative rounded-2xl object-cover w-full h-auto shadow-2xl border border-white/5"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-2xl shadow-xl backdrop-blur-md">
              <p className="font-display text-4xl text-primary leading-none">100%</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Local Flavour</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              The Heartbeat of <span className="text-primary">Hebron</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mark's Pub & Shisanyama isn't just a place to grab a drink or a bite to eat. 
                It's an institution in Pretoria Hebron—a gathering place where the community comes alive.
              </p>
              <p>
                We blend the authentic, smoky flavors of a traditional South African braai with the 
                vibrant, energetic atmosphere of a modern premium pub. Whether you're here to watch the 
                big game, enjoy live entertainment, or simply share a cold one with friends, 
                you're part of the family the moment you walk through our doors.
              </p>
              <p className="font-medium text-foreground border-l-4 border-primary pl-4 py-1 italic">
                "Great food, ice-cold drinks, and the best crowd in Pretoria."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
