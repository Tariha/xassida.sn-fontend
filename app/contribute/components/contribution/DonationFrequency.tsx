import React, { useState } from "react"

import { IDonationFrequency } from "@/types/donation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FrequencyProps {
  frequencies: IDonationFrequency[]
  handleFrequency: (value: IDonationFrequency) => void
}
const DonationFrequency = ({
  frequencies,
  handleFrequency,
}: FrequencyProps) => {
  const [selectedfrequency, setSelectedFrequency] =
    useState<IDonationFrequency>(frequencies[0])
  handleFrequency(selectedfrequency)
  return (
    <div className="my-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="border-2 border-vert" variant="outline">
            Dons réguliers
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 border border-card-foreground bg-card">
          <DropdownMenuLabel>
            <em>Choisissez: </em>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedfrequency.label}
            onValueChange={(value) =>
              setSelectedFrequency(frequencies.find((f) => f.value === value)!)
            }
          >
            {frequencies.map((freq, index) => (
              <DropdownMenuRadioItem key={index} value={freq.value}>
                {freq.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default React.memo(DonationFrequency)
