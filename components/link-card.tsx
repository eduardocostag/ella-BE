import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Star, MessageCircle, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  href: string
  icon?: "shield" | "star" | "message" | "send"
  variant?: "default" | "accent"
}

const iconMap = {
  shield: Shield,
  star: Star,
  message: MessageCircle,
  send: Send,
}

export function LinkCard({ title, href, icon, variant = "default" }: LinkCardProps) {
  const Icon = icon ? iconMap[icon] : null

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <Card
        className={cn(
          "p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg border-2",
          variant === "accent"
            ? "bg-accent/10 border-accent hover:bg-accent/20"
            : "bg-card hover:bg-card/80 border-border hover:border-primary/50",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {Icon && (
              <div
                className={cn(
                  "p-2.5 sm:p-3 rounded-lg flex-shrink-0",
                  variant === "accent" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground",
                )}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base sm:text-lg text-balance">{title}</h3>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </Card>
    </Link>
  )
}
