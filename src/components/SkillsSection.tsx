import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Settings
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'NestJS', level: 70 },
        { name: 'GraphQL', level: 80 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      title: 'Styling & Libraries',
      icon: Palette,
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Ant Design', level: 85 },
        { name: 'Styled Components', level: 80 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Tools & Utilities',
      icon: Settings,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Axios', level: 85 },
        { name: 'Lodash', level: 80 },
        { name: 'Moment.js/Day.js', level: 85 }
      ]
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js', 'NestJS',
    'JavaScript (ES6+)', 'HTML', 'CSS', 'Tailwind CSS', 'Ant Design', 
    'Styled Components', 'GraphQL', 'SQL', 'Axios', 'Lodash', 'Moment.js', 
    'Day.js', 'Git', 'GitHub', 'Micro Frontend'
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-skill-primary to-skill-secondary';
    if (level >= 80) return 'from-project-accent to-skill-secondary';
    return 'from-muted-foreground to-muted-foreground';
  };

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-glass border-glass-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-hero-gradient-from/10 to-hero-gradient-to/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Tags */}
        <Card className="bg-glass border-glass-border">
          <CardHeader>
            <CardTitle className="text-center">Technologies I Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;