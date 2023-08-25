import { Reciter } from "@/types"

import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import AudioList from "@/components/AudioList"
import InfiniteList from "@/components/InfiniteList"

interface Props extends React.PropsWithChildren {
  reciter: Reciter
}

const AudioListSheet: React.FC<Props> = ({ children, reciter }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
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
