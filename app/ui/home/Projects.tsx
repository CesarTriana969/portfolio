import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Projects } from "@/app/types/projects";
import { ProjectCardSkeleton } from "../skeletons/ProjectCardSkeleton";

export default function Projects() {
  const [projects, setProjects] = useState<Projects[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/last-projects');
        const data: Projects[] = await response.json();
        setProjects(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="py-20 bg-muted/50" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Últimos Proyectos</h2>
          <Button asChild variant="ghost">
            <Link href="/projects">
              Ver Todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <ProjectCardSkeleton />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative aspect-video">
                  <video
                    width="475"
                    height="267"
                    controls
                    preload="true"
                    playsInline
                    muted
                    autoPlay
                  >
                    <source src={project.video} type="video/mp4" />
                    <track
                      src={project.video}
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.slug} target="_blank">
                        <Globe className="mr-2 h-4 w-4" />
                        Ver
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.githubUrl}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
