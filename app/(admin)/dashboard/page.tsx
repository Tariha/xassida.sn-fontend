import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AudioDashboard from "./audios/AudioDashboard"
import ReciterDashboard from "./reciters/ReciterDashboard"

const TAB_ITEMS = ["recitateurs", "audios", "xassida"]

export default function DashboardPage() {
  return (
    <Tabs
      defaultValue="recitateurs"
      className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"
    >
      <TabsList className="lg-mx-4 flex lg:h-full lg:w-1/5 lg:flex-col">
        {TAB_ITEMS.map((item) => (
          <TabsTrigger
            className="py-2 capitalize lg:w-full lg:justify-start"
            key={item}
            value={item}
          >
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="flex-1">
        <TabsContent value="recitateurs">
          <ReciterDashboard />
        </TabsContent>
        <TabsContent value="audios">
          <AudioDashboard />
        </TabsContent>
        <TabsContent value="xassidas"></TabsContent>
      </div>
    </Tabs>
  )
}
