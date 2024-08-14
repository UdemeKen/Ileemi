interface AuthHeaderProps {
    label: string
    title: string
}

export default function AuthHeader({label, title}: AuthHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center w-full">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}
