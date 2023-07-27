import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {
  tabs: any
  defaut: string
}

const CustomTabs: React.FC<Props> = ({ tabs, defaut }) => {
  return (
    <Tabs defaultValue={defaut} className="my-4">
      <TabsList>
        {Object.keys(tabs).map((k) => (
          <TabsTrigger key={k} value={k}>
            {k}
          </TabsTrigger>
        ))}
      </TabsList>
      <>
        {Object.keys(tabs).map((k) => {
          let Content = tabs[k]
          return (
            <TabsContent className="border-0 p-0" key={k} value={k}>
              <Content />
            </TabsContent>
          )
        })}
      </>
    </Tabs>
  )
}

export default React.memo(CustomTabs)
