import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"
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
              Ready for a great time? Come down to Mark's Pub & Shisanyama in Hebron. We're ready to serve you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Pretoria Hebron</p>
                  <p className="text-muted-foreground">South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-foreground mb-1">Trading Hours</h4>
                  <p className="text-muted-foreground">Monday - Thursday: 12:00 PM - 10:00 PM</p>
                  <p className="text-muted-foreground">Friday - Sunday: 11:00 AM - Late</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <h4 className="font-display text-2xl text-foreground mb-6">Follow Our Socials</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.facebook.com/search/top?q=Mark%27s%20Pub%20%26%20Shisanyama', '_blank')}
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
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.tiktok.com/@markspubandshisanyama', '_blank')}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  TikTok
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Map/Placeholder Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] rounded-2xl border border-border bg-card overflow-hidden relative"
          >
            {/* Abstract map placeholder */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10 bg-background/50 backdrop-blur-sm">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <MapPin className="text-primary w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-2">Pretoria Hebron</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Search for "Mark's Pub & Shisanyama" on Google Maps to navigate directly to our door.
              </p>
              <Button 
                onClick={() => window.open('https://www.google.com/maps/search/Mark%27s+Pub+%26+Shisanyama+Pretoria+Hebron', '_blank')}
                className="font-display text-xl px-8"
              >
                Open in Maps
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
