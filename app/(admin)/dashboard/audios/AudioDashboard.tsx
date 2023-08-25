import dynamic from "next/dynamic"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

//import AudioTab from "@/components/HomePage/Tabs/AudioTab"

import AudioModalForm from "./components/AudioModalForm"

const AudioTab = dynamic(() => import("@/components/HomePage/Tabs/AudioTab"), {
  ssr: true,
})

const AudioDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Les Audios</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Creer un nouveau audio grace au formulaire.
          </p>
          <AudioModalForm>
            <Button variant="outline" className="space-x-2">
              <Plus size={14} />
              <span>Audio</span>
            </Button>
          </AudioModalForm>
        </div>
      </div>
      <Separator />
      <AudioTab />
    </div>
  )
}

export default AudioDashboard
