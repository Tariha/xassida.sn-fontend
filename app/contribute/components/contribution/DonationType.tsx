import React, { useState } from "react"

import { IDonationType } from "@/types/donation"
import { DONATIONS } from "@/lib/constants"
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface TypeProps {
  handleDonationType: (value: IDonationType) => void
  field: any
}

const DonationTypes = ({ handleDonationType, field }: TypeProps) => {
  const types: IDonationType[] = DONATIONS.types

  return (
    <RadioGroup
      defaultValue={field.value}
      className="p- grid h-12 grid-cols-2 rounded-lg border-2 border-vert"
      onValueChange={(value) => {
        field.onChange(value)
        handleDonationType(types.find((t) => t.value === value)!)
      }}
    >
      {types.map((type, index) => (
        <FormItem key={index} className="space-y-0">
          <RadioGroupItem
            value={type.value}
            id={`donation-type-${index}`}
            className="peer sr-only"
            disabled={false}
          />
          <FormLabel
            className="mt-0 flex h-full cursor-pointer items-center justify-center rounded-sm text-base font-normal peer-data-[state=checked]:bg-vert [&:has([data-state=checked])]:border-vert"
            htmlFor={`donation-type-${index}`}
          >
            {type.label}
          </FormLabel>
        </FormItem>
      ))}
      <FormMessage />
    </RadioGroup>
  )
}

export default React.memo(DonationTypes)
