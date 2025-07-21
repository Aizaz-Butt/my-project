import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and excellent user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts clearly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frontend developer specializing in React.js with expertise in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a frontend developer specializing in React.js, with a strong focus on creating dynamic and
                  user-friendly interfaces. My journey in web development has been driven by passion for creating
                  seamless user experiences and solving complex problems.
                </p>
                <p>
                  Currently expanding my skill set by learning Next.js, Vue.js, Node.js, and NestJS to enhance 
                  my expertise in both frontend and backend development. I believe in continuous learning and 
                  delivering high-quality solutions that meet modern web standards.
                </p>
                <p>
                  I am dedicated to writing clean, maintainable code and staying updated with the latest 
                  technologies and best practices in web development.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-glass border-glass-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-gradient-to-br from-hero-gradient-from/10 to-hero-gradient-to/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;