import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0" />
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Desarrollador Frontend
          <span className="text-primary block mt-2">Construyamos una historia juntos</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Especialista en el desarrollo de soluciones intuitivas, escalables y optimizadas para cualquier dispositivo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Contáctame</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#projects">Ver Proyectos</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  )
}
