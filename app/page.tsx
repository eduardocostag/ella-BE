import { ProfileHeader } from "@/components/profile-header"
import { LinkCard } from "@/components/link-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <ProfileHeader />

        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          <LinkCard title="Privacy" href="/privacy" icon="shield" />

          <LinkCard title="OnlyFans" href="https://onlyfans.com/seu-perfil" icon="star" variant="accent" />

          <LinkCard title="Telegram" href="https://t.me/seu-canal" icon="send" />
        </div>
      </div>
    </main>
  )
}
