import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-center gap-1 py-10 md:h-24 md:py-0 my-0 mx-auto">
        <div className="flex gap-4">
          <Link
            href="https://github.com/CesarTriana969"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-muted p-2 hover:bg-muted/80"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/-cesar-triana/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-muted p-2 hover:bg-muted/80"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:cesardev0398@gmail.com"
            className="rounded-2xl bg-muted p-2 hover:bg-muted/80"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            {new Date().getFullYear()} Copyright © Cesar Triana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}