import React, { useState } from "react"

import { IDonationType } from "@/types/donation"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface TypeProps {
  handleDonationType: (value: IDonationType) => void
  types: IDonationType[]
}

const DonationTypes = ({ types, handleDonationType }: TypeProps) => {
  const [donationType, setDonationType] = useState<IDonationType>(types[0])
  handleDonationType(donationType)

  return (
    <RadioGroup
      defaultValue={donationType.value}
      className="p- grid h-12 grid-cols-2 rounded-lg border-2 border-vert"
      onValueChange={(value) =>
        setDonationType(types.find((t) => t.value === value)!)
      }
    >
      {types.map((type, index) => (
        <div key={index}>
          <RadioGroupItem
            value={type.value}
            id={`donation-type-${index}`}
            className="peer sr-only"
            disabled={false}
          />
          <Label
            className="flex h-full cursor-pointer items-center justify-center rounded-sm text-base font-normal peer-data-[state=checked]:bg-vert [&:has([data-state=checked])]:border-vert"
            htmlFor={`donation-type-${index}`}
          >
            {type.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default React.memo(DonationTypes)
