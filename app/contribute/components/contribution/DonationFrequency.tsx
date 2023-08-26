import React, { useState } from "react"

import { IDonationFrequency } from "@/types/donation"
import { DONATIONS } from "@/lib/constants"
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
import { FormField, FormItem } from "@/components/ui/form"

interface Props {
  formControl: any
  handleFrequency: (value: IDonationFrequency) => void
}
const DonationFrequency = ({ formControl, handleFrequency }: Props) => {
  const frequencies: IDonationFrequency[] = DONATIONS.frequency

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
          <FormField
            name="frequency"
            control={formControl}
            render={({ field }) => (
              <DropdownMenuRadioGroup
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value)
                  handleFrequency(frequencies.find((f) => f.value === value)!)
                }}
              >
                {frequencies.map((freq, index) => (
                  <FormItem key={index}>
                    <DropdownMenuRadioItem value={freq.value}>
                      {freq.label}
                    </DropdownMenuRadioItem>
                  </FormItem>
                ))}
              </DropdownMenuRadioGroup>
            )}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default React.memo(DonationFrequency)
