import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="h-24 w-24 border-4 border-primary/20">
        <AvatarImage src="/diverse-profile-avatars.png" alt="Profile" />
        <AvatarFallback className="text-2xl bg-primary text-primary-foreground">MP</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-balance">Meu Perfil</h1>
        <p className="text-muted-foreground text-pretty max-w-md">
          Todos os meus links em um só lugar. Conecte-se comigo nas redes sociais e plataformas!
        </p>
      </div>
    </div>
  )
}
