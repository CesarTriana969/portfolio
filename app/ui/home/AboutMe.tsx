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
                href="/docs/cv_cesar_triana.pdf" 
                download="cv_cesar_triana.pdf" 
              >
                Descargar CV
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            Soy desarrollador de software con más de dos años de experiencia en aplicaciones web y móviles. Me especializo en crear soluciones eficientes, escalables y fáciles de mantener, garantizando una experiencia de usuario fluida y responsiva. Convierto ideas y diseños en productos funcionales, priorizando velocidad y adaptabilidad, siempre aplicando las mejores prácticas en desarrollo.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Vue", "Laravel", "React", "React Native", "TypeScript", "Tailwind", "Git", "Github", "MySQL", "Trabajo en equipo", "Capacidad de autogestión", "Comunicación verbal", "Atención al detalle", "Adaptabilidad y aprendizaje rápido"].map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
