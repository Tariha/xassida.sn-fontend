import { MoonStar } from "lucide-react"

const RamadanButton = () => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <MoonStar className="text-foreground" />
      <span>Supportez Xassida.sn en ce Ramadan</span>
      <a
        href="https://koparexpress.com/apps/collectes/r830jt9qe"
        target="_blank"
        rel="noreferrer"
      >
        <span className="rounded-sm bg-vert px-3 py-2 text-xs text-white hover:bg-vert/90">
          Contribuer
        </span>
      </a>
    </div>
  )
}

export default RamadanButton
