import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ReciterTab from "@/components/HomePage/Tabs/ReciterTab"

import ReciterModalForm from "./_components/Modal"

const ReciterDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Les Recitateurs</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Creer un nouveau recitateur grace au formulaire.
          </p>
          <ReciterModalForm>
            <Button variant="outline" className="space-x-2">
              <Plus size={14} />
              <span>Recitateur</span>
            </Button>
          </ReciterModalForm>
        </div>
      </div>
      <Separator />
      <ReciterTab />
    </div>
  )
}

export default ReciterDashboard
