import { motion } from "framer-motion"
import { Button } from "./ui/button"

const foodItems = [
  { name: "Signature Pap & Vleis", desc: "Traditional stiff pap served with your choice of premium grilled meat and our secret chakalaka.", price: "From R90" },
  { name: "Farm-Style Boerewors", desc: "Thick, juicy traditional South African sausage spiced to perfection.", price: "R75" },
  { name: "Flame-Grilled Chicken", desc: "Quarter, half, or full chicken marinated in our special peri-peri sauce.", price: "From R65" },
  { name: "Tender Lamb Chops", desc: "Premium lamb cuts, grilled over hot coals with a rosemary and garlic rub.", price: "R140" },
  { name: "Prime Beef Steak", desc: "Aged beef cut of the day, seared exactly how you like it.", price: "R160" },
  { name: "The Platter for 2", desc: "A mix of chicken, boerewors, beef steak, accompanied by pap and sides.", price: "R320" },
]

const drinkItems = [
  { name: "Ice Cold Local Beers", desc: "Castle, Black Label, Hansa, Windhoek on tap or by the bottle.", price: "From R30" },
  { name: "Premium Ciders", desc: "Savanna, Hunters, Flying Fish served ice cold with a slice of lemon.", price: "From R35" },
  { name: "Top Shelf Spirits", desc: "Whiskey, Gin, Vodka, Brandy & Cognac varieties.", price: "Varies" },
  { name: "Signature Cocktails", desc: "Mixed to perfection by our expert bartenders.", price: "From R70" },
]

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Menu <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Straight from the fire to your plate. Pair it with the coldest drinks in town.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Shisanyama Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
              <h3 className="font-display text-3xl text-foreground">From The <span className="text-primary">Grill</span></h3>
            </div>
            
            <div className="space-y-8">
              {foodItems.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                    <span className="font-display text-lg text-primary">{item.price}</span>
                  </div>
                  <div className="w-full border-t border-dashed border-border/50 my-2" />
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bar Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
              <h3 className="font-display text-3xl text-foreground">From The <span className="text-primary">Bar</span></h3>
            </div>
            
            <div className="space-y-8">
              {drinkItems.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                    <span className="font-display text-lg text-primary">{item.price}</span>
                  </div>
                  <div className="w-full border-t border-dashed border-border/50 my-2" />
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-card border border-primary/20 rounded-2xl p-6 text-center shadow-lg">
              <h4 className="font-display text-2xl text-foreground mb-2">Want to see more?</h4>
              <p className="text-muted-foreground text-sm mb-6">Visit us to see our full selection of meals, platters, and specials.</p>
              <Button 
                variant="outline" 
                className="w-full font-display text-lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Directions
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
