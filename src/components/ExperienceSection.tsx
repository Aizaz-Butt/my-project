import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'EmbraceIT',
      location: 'On-site',
      period: 'Jan 2022 - Present',
      type: 'Full-time',
      description: [
        'Learned and worked with Next.js to build responsive web applications with a focus on performance and SEO optimization',
        'Began exploring back-end development using NestJS',
        'Developed and implemented APIs using GraphQL for efficient data communication',
        'Learned and applied SQL for database management and querying',
        'Managed and successfully delivered multiple front-end projects'
      ],
      technologies: ['React.js', 'Next.js', 'NestJS', 'GraphQL', 'SQL', 'TypeScript']
    },
    {
      title: 'Frontend Intern',
      company: 'EmbraceIT',
      location: 'On-site',
      period: 'Sep 2021 - Dec 2021',
      type: 'Internship',
      description: [
        'Learned and applied front-end architecture design using React.js',
        'Worked with Recoil for effective state management in React applications',
        'Worked with TypeScript and GraphQL for efficient data fetching and manipulation',
        'Improved debugging and problem-solving skills by working on real-world projects'
      ],
      technologies: ['React.js', 'TypeScript', 'GraphQL', 'Recoil']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Amco IT',
     location: 'On-site',
      period: 'May 2021 - Aug 2021',
      type: 'Internship',
      description: [
        'Designed and implemented responsive user interface with HTML, CSS and Bootstrap',
        'Learned advanced ES6 JavaScript concepts through hands-on practice'
      ],
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript (ES6+)']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          {/* <p className="text-lg text-muted-foreground">
            My professional journey and the impact I've made
          </p> */}
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-glass border-glass-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>{exp.company}</span>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;