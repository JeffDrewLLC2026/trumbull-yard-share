import heroImage from "@/assets/hero-yard.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-secondary" />
            <span className="text-secondary font-body font-semibold tracking-wide uppercase text-sm">
              Trumbull, Connecticut
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Share Your Yard,
            <br />
            <span className="text-secondary">Grow Together</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-10 max-w-lg leading-relaxed">
            Connect with neighbors in Trumbull to share garden space, tools, and
            green-thumb know-how. Your unused yard could be someone's dream garden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-lg rounded-xl">
              <Search className="mr-2 h-5 w-5" />
              Browse Yards
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold px-8 py-6 text-lg rounded-xl"
            >
              List Your Space
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
