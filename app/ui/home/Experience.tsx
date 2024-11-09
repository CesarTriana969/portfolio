import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ExperienceResponse } from "@/app/types/work";
import { WorkCardSkeleton } from "../skeletons/WorkCardSkeleton";

export default function Experience() {

  const [experience, setExperiences] = useState<ExperienceResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const response = await fetch('/api/experiences');
        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchExperiences();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experiencia Laboral</h2>

        {loading ? (
          <WorkCardSkeleton />
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-8">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-muted"></div>

              {experience?.experiences.map((job, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                  <Card className="p-6 transition-all hover:shadow-lg">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.position}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
