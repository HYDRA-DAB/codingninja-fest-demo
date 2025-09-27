import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Code, Utensils, BookOpen, Music } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import hackathonImage from "@/assets/hackathon.jpg";
import foodImage from "@/assets/food-stalls.jpg";
import workshopsImage from "@/assets/workshops.jpg";
import djImage from "@/assets/dj-night.jpg";

const EventPoster = () => {
  const highlights = [
    {
      title: "36hrs Hackathon",
      description: "Non-stop coding marathon with amazing prizes",
      image: hackathonImage,
      icon: Code,
    },
    {
      title: "Food Stalls",
      description: "Delicious food and refreshments to fuel your coding",
      image: foodImage,
      icon: Utensils,
    },
    {
      title: "Tech Workshops",
      description: "Learn cutting-edge technologies from industry experts",
      image: workshopsImage,
      icon: BookOpen,
    },
    {
      title: "DJ Night",
      description: "Unwind with electrifying music and entertainment",
      image: djImage,
      icon: Music,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-glow">
            CodingNinja fest'25
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light">
            The Ultimate Tech Fest Experience
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
            <div className="flex items-center gap-2 glass-card px-6 py-3">
              <Calendar className="text-neon-pink" size={20} />
              <span className="font-medium">13th Oct 2025</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-6 py-3">
              <Clock className="text-neon-green" size={20} />
              <span className="font-medium">3:30 - 9:30 PM</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-6 py-3">
              <MapPin className="text-neon-blue" size={20} />
              <span className="font-medium">TP Ganeshan Audi</span>
            </div>
          </div>
          
          <div className="animate-float">
            <Button className="hero-button text-lg">
              Join the Tech Revolution
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Fest Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="glass-card group hover:shadow-neon-pink transition-all duration-500 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-2 bg-neon-pink/20 rounded-full backdrop-blur-sm border border-neon-pink/30">
                      <highlight.icon className="text-neon-pink" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">{highlight.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Ready to Code the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join us for the most innovative tech fest of the year. Limited spots available.
          </p>
          <Button className="hero-button text-xl px-12 py-6 animate-glow">
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Our Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((sponsor) => (
                <div 
                  key={sponsor}
                  className="glass-card p-6 h-20 flex items-center justify-center hover:shadow-neon-green transition-all duration-300"
                >
                  <span className="text-muted-foreground font-medium">
                    Sponsor {sponsor}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-8">
              {['Instagram', 'Twitter'].map((social) => (
                <Button
                  key={social}
                  variant="outline" 
                  size="sm"
                  className="border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10 hover:shadow-neon-pink neon-glow"
                >
                  {social}
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground">
              © 2025 CodingNinja fest'25. All rights reserved. | Follow us for updates and exclusive content.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventPoster;