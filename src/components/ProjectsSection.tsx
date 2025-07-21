import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Workspace – HR Portal',
      description: 'Built an HR Portal project using React.js with TypeScript for type safety and maintainability. Apollo Client handled GraphQL queries, Recoil managed state, and Styled Components & Ant Design ensured a consistent UI.',
      image: '/placeholder-project-1.jpg',
      technologies: ['React.js', 'TypeScript', 'Apollo Client', 'GraphQL', 'Recoil', 'Styled Components', 'Ant Design', 'Moment.js'],
      features: [
        'Type-safe development with TypeScript',
        'GraphQL data layer with Apollo Client',
        'State management using Recoil',
        'Consistent UI with Ant Design',
        'Form handling with React Hook Form',
        'Date management with Moment.js'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'Kitchen Cafe - Food Ordering Platform',
      description: 'A food ordering platform with two applications: an Admin Panel (React.js) and a User App (Next.js). Users browse customizable menus and place orders, while vendors manage meals via the Admin Panel.',
      image: '/placeholder-project-2.jpg',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Axios'],
      features: [
        'Dual application architecture',
        'Customizable menu browsing',
        'Order placement and tracking',
        'Vendor meal management',
        'Admin panel for operations',
        'Seamless user-vendor interaction'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'Trudy – YouTube Channel Analysis Extension',
      description: 'Built a YouTube extension using React.js to analyze channels for brand collaborations, sponsorships, and promotions. Implemented context API for state management and event-driven architecture.',
      image: '/placeholder-project-3.jpg',
      technologies: ['React.js', 'Context API', 'JavaScript', 'Chrome Extension API', 'YouTube Data API'],
      features: [
        'YouTube channel analysis',
        'Brand collaboration insights',
        'Sponsorship detection',
        'Promotion tracking',
        'Context API state management',
        'Event-driven architecture'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-project-accent/10 text-project-accent border-project-accent/20';
      case 'In Progress':
        return 'bg-skill-primary/10 text-skill-primary border-skill-primary/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my professional projects and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-glass border-glass-border overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-hero-gradient-from/10 to-hero-gradient-to/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Eye className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;