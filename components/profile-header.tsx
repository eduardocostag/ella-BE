import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
      <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-4 border-primary/20">
        <AvatarImage src="/diverse-profile-avatars.png" alt="Profile" />
        <AvatarFallback className="text-xl sm:text-2xl bg-primary text-primary-foreground">E</AvatarFallback>
      </Avatar>

      <div className="space-y-1.5 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-balance">Ella</h1>
        <p className="text-sm sm:text-base text-muted-foreground text-pretty max-w-md px-2">all my links</p>
      </div>
    </div>
  )
}
