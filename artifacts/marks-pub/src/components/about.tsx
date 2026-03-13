import { motion } from "framer-motion"
import { Trophy, Users, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
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
            
            {/* Award badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-primary/40 p-5 rounded-2xl shadow-xl backdrop-blur-md max-w-[180px]">
              <Trophy className="text-primary w-7 h-7 mb-1" />
              <p className="font-display text-sm text-primary leading-tight">Windhoek Real Beer, Real Food</p>
              <p className="text-xs text-muted-foreground mt-1">R200,000 Grand Prize Winner 2026</p>
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
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Known locally as <strong className="text-foreground">"Ko Papi"</strong>, Mark's Pub & Shisanyama is Pretoria Hebron's ultimate destination 
                for authentic South African braai, ice-cold drinks, and unforgettable vibes.
              </p>
              <p>
                With a newly renovated modern atmosphere, live DJ performances spanning Soul, R&B and Amapiano, 
                and the finest shisanyama in the area — we're proud to be <strong className="text-foreground">#10 of 900 pubs in Pretoria</strong> with a 4.3★ rating on Google.
              </p>
              <p className="font-medium text-foreground border-l-4 border-primary pl-4 py-1 italic text-base">
                "We are from Pretoria, and this is Joburg. Our competitors are from here. We understood they would have 
                the home-ground advantage, but our food spoke, and the people who tasted our food voted."
              </p>
              <p className="text-sm text-muted-foreground">— Katlego Ntloedibe, Marketing Manager</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <Users className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-display text-2xl text-foreground">40+</p>
                  <p className="text-sm text-muted-foreground">Employees from the community</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <Heart className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-display text-2xl text-foreground">Community</p>
                  <p className="text-sm text-muted-foreground">Schools, soccer & development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
