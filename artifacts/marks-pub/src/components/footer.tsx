import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#hero" onClick={scrollToTop} className="inline-flex items-center gap-3 group mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.jpg`}
                alt="Mark's Pub & Shisanyama Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/40 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-display text-2xl tracking-wide text-foreground">
                Mark's Pub <span className="text-primary">&</span> Shisanyama
              </span>
            </a>
            <p className="text-muted-foreground max-w-xs">
              The ultimate local spot in Pretoria Hebron for cold drinks, authentic shisanyama, and great vibes.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/search/top?q=Mark%27s%20Pub%20%26%20Shisanyama" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/markspub_and_shisanyama" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@markspubandshisanyama" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mark's Pub & Shisanyama. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
