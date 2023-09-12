import { useState } from "react"
import { Reciter } from "@/types"

import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import AudioList from "@/components/AudioList"
import InfiniteList from "@/components/InfiniteList"

import ReciterCard from "./ReciterCard"

interface Props extends React.PropsWithChildren {
  reciter: Reciter
}

const AudioListSheet: React.FC<Props> = ({ children, reciter }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div>
        <ReciterCard setOpen={() => setOpen(true)} data={reciter} />
      </div>
      <SheetContent
        autoFocus={false}
        className="h-1/2 rounded-t-lg"
        position="bottom"
      >
        <div className="h-[85%] md:container">
          <SheetHeader>
            <SheetTitle className="capitalize">{reciter.name}</SheetTitle>
            <SheetDescription>Playlist</SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-full scrollbar-hide">
            <InfiniteList
              params={{ reciter: reciter.id }}
              Component={AudioList}
              type="audio"
            />
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default AudioListSheet
