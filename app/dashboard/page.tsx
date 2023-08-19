import { Separator } from "@/components/ui/separator"
import ReciterTab from "@/components/HomePage/Tabs/ReciterTab"

import ReciterModalForm from "./components/RecitateurForm/ReciterModalForm"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Les Recitateurs</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Creer un nouveau recitateur grace au formulaire.
          </p>
          <ReciterModalForm />
        </div>
      </div>
      <Separator />
      <ReciterTab />
    </div>
  )
}
