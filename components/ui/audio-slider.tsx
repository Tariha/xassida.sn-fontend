"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface CustomProps {
  showThumb?: boolean
  rangeColor?: string
  trackColor?: string
}

const AudioSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & CustomProps
>(({ className, rangeColor, trackColor, showThumb = false, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        "relative h-[4px] w-full grow overflow-hidden rounded-full rounded-l-none bg-secondary",
        trackColor
      )}
    >
      <SliderPrimitive.Range
        className={cn("absolute h-full bg-vert", rangeColor)}
      />
    </SliderPrimitive.Track>
    {showThumb && (
      <SliderPrimitive.Thumb className="block h-4 w-4 cursor-grabbing rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    )}
  </SliderPrimitive.Root>
))
AudioSlider.displayName = SliderPrimitive.Root.displayName

export { AudioSlider }
