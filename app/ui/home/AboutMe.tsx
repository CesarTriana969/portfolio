import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from 'next-themes';
import Image from "next/image";

export default function AboutMe() {
  const { theme } = useTheme(); 

  return (
    <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`relative aspect-square overflow-hidden border-muted ${theme === 'light' ? 'border-8' : ''}`}>
          {theme === 'light' ? (
            <Image
              src="/cesar-triana-white.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src="/cesar-triana.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between">
            <h3 className="text-2xl font-semibold">Hola, soy Cesar Triana</h3>
            <Button asChild size="lg">
              <a 
                href="/docs/cv_cesar_triana_es.pdf" 
                download="cv_cesar_triana_es.pdf" 
              >
                Descargar CV
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
Soy desarrollador con más de dos años de experiencia en la creación de aplicaciones web y móviles. Me especializo en desarrollar soluciones eficientes, escalables y mantenibles, asegurando un alto rendimiento y una experiencia de usuario excepcional. Mi experiencia abarca tanto el desarrollo frontend como backend, incluyendo diseño de APIs, gestión de bases de datos y administración de servidores. Transformo ideas y diseños en productos funcionales y de alta calidad, priorizando la velocidad, la adaptabilidad y las mejores prácticas de desarrollo.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Vue", "Nuxt", "Laravel", "React", "React Native", "TypeScript", "Tailwind", "Shopify", "Git", "Github", "MySQL", "Trabajo en equipo", "Capacidad de autogestión", "Comunicación verbal", "Atención al detalle", "Adaptabilidad y aprendizaje rápido"].map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
