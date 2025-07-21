import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Lahore",
      location: "Lahore, Pakistan",
      period: "2017 - 2021",
      gpa: "",
      highlights: [
        "Focused on software engineering principles and practices",
        "Gained strong foundation in programming and development",
        "Completed comprehensive curriculum in software development",
        "Built multiple academic projects using modern technologies",
      ],
      coursework: [
        "Software Engineering",
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Object Oriented Programming",
        "Software Design Patterns",
      ],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            My academic background in software engineering
          </p>
        </div> */}

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground flex items-center gap-2 justify-center">
              <GraduationCap className="h-8 w-8 text-primary" />
              Education
            </h3>

            {education.map((edu, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 bg-glass border-glass-border"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <div className="space-y-1">
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </span>
                          {edu.gpa && <span>GPA: {edu.gpa}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Achievements
                      </h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
