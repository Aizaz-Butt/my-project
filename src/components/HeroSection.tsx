import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-from/10 to-hero-gradient-to/10 dark:from-hero-gradient-from/20 dark:to-hero-gradient-to/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-hero-gradient-from/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hero-gradient-to/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground">AB</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-clip-text text-transparent">
                Aizaz Butt
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Frontend Developer & React.js Specialist
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I am a frontend developer specializing in React.js, with a strong focus on creating dynamic and
            user-friendly interfaces. Currently expanding my skill set to enhance my expertise in modern web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to hover:from-hero-gradient-from/90 hover:to-hero-gradient-to/90 text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8">
            <button
              onClick={scrollToNext}
              className="animate-bounce hover:text-primary transition-colors duration-200"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;