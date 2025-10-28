import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Star, MessageCircle, Send, Camera, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  description: string
  href: string
  icon?: "shield" | "star" | "message" | "send" | "camera" | "twitter"
  variant?: "default" | "accent"
}

const iconMap = {
  shield: Shield,
  star: Star,
  message: MessageCircle,
  send: Send,
  camera: Camera,
  twitter: Twitter,
}

export function LinkCard({ title, description, href, icon, variant = "default" }: LinkCardProps) {
  const Icon = icon ? iconMap[icon] : null

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <Card
        className={cn(
          "p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2",
          variant === "accent"
            ? "bg-accent/10 border-accent hover:bg-accent/20"
            : "bg-card hover:bg-card/80 border-border hover:border-primary/50",
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {Icon && (
              <div
                className={cn(
                  "p-3 rounded-lg",
                  variant === "accent" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-balance">{title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{description}</p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </div>
      </Card>
    </Link>
  )
}
