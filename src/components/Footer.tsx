import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aizaz-butt-b5b64621b/', icon: Linkedin },
    { name: 'Email', href: 'mailto:aizazbutt.22@gmail.com', icon: Mail },
    { name: 'Number', href: 'tel:+923237355533', icon: Phone },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-clip-text text-transparent">
              Aizaz Butt
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer specializing in React.js and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Education', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="h-9 w-9 px-0 hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              className="w-full"
            >
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aizaz Butt. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;