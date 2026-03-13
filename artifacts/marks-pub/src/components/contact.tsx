import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Facebook, Instagram, CreditCard, Car, Accessibility, ShoppingBag, CalendarCheck } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              Find <span className="text-primary">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Come down to Mark's Pub & Shisanyama in Hebron. We're open daily and ready to serve you the best time of your life.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">M20 Hebron Road</p>
                  <p className="text-muted-foreground">Pretoria, Gauteng 0193</p>
                  <p className="text-muted-foreground">South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-foreground mb-1">Trading Hours</h4>
                  <p className="text-muted-foreground">Open Daily: <span className="text-foreground font-medium">10:00 AM – 2:00 AM</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-foreground mb-1">Call Us</h4>
                  <a 
                    href="tel:+27723867314" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    +27 72 386 7314
                  </a>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: CreditCard, label: "Cards Accepted" },
                { icon: Car, label: "Car Wash" },
                { icon: ShoppingBag, label: "Takeaways" },
                { icon: CalendarCheck, label: "Bookings" },
                { icon: Accessibility, label: "Wheelchair Friendly" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground text-sm">
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h4 className="font-display text-2xl text-foreground mb-5">Follow Our Socials</h4>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.facebook.com/p/Marks-Pub-Shisanyama-100084372888921/', '_blank')}
                >
                  <Facebook size={20} />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.instagram.com/markspub_and_shisanyama', '_blank')}
                >
                  <Instagram size={20} />
                  @markspub_and_shisanyama
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.tiktok.com/@markspubandshisanyama', '_blank')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  @markspubandshisanyama
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] rounded-2xl border border-border bg-card overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10 bg-background/50 backdrop-blur-sm">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <MapPin className="text-primary w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-2">Pretoria Hebron</h3>
              <p className="text-muted-foreground font-medium mb-1">M20 Hebron Road, Gauteng 0193</p>
              <p className="text-muted-foreground text-sm max-w-sm mb-8">
                Open daily from 10 AM to 2 AM. Tap below to get directions straight to our door.
              </p>
              <Button 
                onClick={() => window.open('https://www.google.com/maps/search/Mark%27s+Pub+%26+Shisanyama+M20+Hebron+Road+Pretoria+0193', '_blank')}
                className="font-display text-xl px-8"
              >
                Open in Google Maps
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
