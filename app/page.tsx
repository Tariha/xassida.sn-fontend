import { TABS } from "@/lib/constants"
import { Separator } from "@/components/ui/separator"
import Banner from "@/components/HomePage/Banner"
import Tabs from "@/components/HomePage/Tabs"

export default function IndexPage() {
  return (
    <>
      <Banner />
      <div className="container">
        <Tabs tabs={TABS.top} defaut="Historique" />
        <Separator />
        <Tabs tabs={TABS.bottom} defaut="Xassidas" />
      </div>
    </>
  )
}
