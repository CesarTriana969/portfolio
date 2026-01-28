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
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-2xl font-semibold">Hola, soy César Triana</h3>
              <Button asChild size="lg">
                <a 
                  href="/docs/cv_cesar_triana_es.pdf" 
                  download="cv_cesar_triana_es.pdf" 
                >
                  Descargar CV
                </a>
              </Button>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hola me especializo en Desarrollo Frontend. No es solo sobre código limpio o arquitectura escalable (aunque eso importa). Es sobre entender que cada funcionalidad complicada, cada API, cada deploy en producción es un reto interesante que vale la pena resolver bien.
              </p>

              <div>
                <p className="font-semibold text-foreground mb-2">Lo que me define:</p>
                <ul className="space-y-1 ml-4">
                  <li>Obsesión por resolver problemas complejos</li>
                  <li>Pasión genuina por aprender constantemente</li>
                  <li>Confianza adquirida por la experiencia</li>
                  <li>Curiosidad de entender cómo otros escriben código</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">Lo que me equilibra:</p>
                <p>
                  Meditación, lectura, música (rock, rap, vallenato), videojuegos, tiempo con mis seres queridos. 
                </p>
              </div>

              <p className="italic border-l-4 border-primary pl-4">
                <span className="font-semibold">Mi filosofía:</span> Todo es posible. Solo necesitas documentarte un poco más y los recursos necesarios.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
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