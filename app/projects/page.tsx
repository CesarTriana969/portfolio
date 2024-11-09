"use client";

import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { Projects } from "../types/projects";
import { CategoriesResponse } from "../types/categories";
import { ProjectCardSkeleton } from "../ui/skeletons/ProjectCardSkeleton";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [projects, setProjects] = useState<Projects[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    }

    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        const data: CategoriesResponse = await response.json();
        setCategories(["All", ...data.categories.map((cat) => cat.name)]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }

    fetchProjects();
    fetchCategories();
  }, []);


  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    const normalizedSearch = search.toLowerCase();
    const isAllCategory = category === "All";

    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.description.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        isAllCategory || project.category.some((cat) => cat === category);

      return matchesSearch && matchesCategory;
    });
  }, [search, category, projects]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Proyectos</h1>
          <p className="text-muted-foreground">Explora mi Arte</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar proyectos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sm:flex-1"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading ? (
          <ProjectCardSkeleton />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
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
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
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

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">¡Lo sentimos! No hemos encontrado proyectos</p>
          </div>
        )}
      </div>
    </div>
  );
}