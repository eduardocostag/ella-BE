import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Globe } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="mt-12 flex justify-center gap-4">
      <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
        <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
        <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
        <a href="mailto:seu-email@example.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className="rounded-full bg-transparent">
        <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Website</span>
        </a>
      </Button>
    </div>
  )
}
