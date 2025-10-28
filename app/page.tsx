import { ProfileHeader } from "@/components/profile-header"
import { LinkCard } from "@/components/link-card"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <ProfileHeader />

        <div className="mt-8 space-y-4">
          <LinkCard
            title="Privacy Policy"
            description="Leia nossa política de privacidade"
            href="/privacy"
            icon="shield"
          />

          <LinkCard
            title="OnlyFans"
            description="Conteúdo exclusivo"
            href="https://onlyfans.com/seu-perfil"
            icon="star"
            variant="accent"
          />

          <LinkCard
            title="WhatsApp"
            description="Entre em contato direto"
            href="https://wa.me/5511999999999"
            icon="message"
          />

          <LinkCard title="Telegram" description="Junte-se ao nosso canal" href="https://t.me/seu-canal" icon="send" />

          <LinkCard
            title="Instagram"
            description="Siga no Instagram"
            href="https://instagram.com/seu-perfil"
            icon="camera"
          />

          <LinkCard
            title="Twitter / X"
            description="Acompanhe no Twitter"
            href="https://twitter.com/seu-perfil"
            icon="twitter"
          />
        </div>

        <SocialLinks />
      </div>
    </main>
  )
}
