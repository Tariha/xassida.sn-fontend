import { useState } from "react"
import { Reciter } from "@/types"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import AudioList from "@/components/AudioList"
import InfiniteList from "@/components/InfiniteList"

import ReciterCard from "./ReciterCard"

interface Props extends React.PropsWithChildren {
  reciter: Reciter
}

const AudioListSheet: React.FC<Props> = ({ reciter }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div>
        <ReciterCard setOpen={() => setOpen(true)} data={reciter} />
      </div>
      <DrawerContent className="h-1/2 rounded-t-lg">
        <div className="h-[85%] md:container">
          <DrawerHeader>
            <DrawerTitle className="capitalize">{reciter.name}</DrawerTitle>
            <DrawerDescription>Playlist</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-full px-4 scrollbar-hide">
            <InfiniteList
              params={{ "reciter.id": reciter.id }}
              Component={AudioList}
              type="audio"
            />
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AudioListSheet
