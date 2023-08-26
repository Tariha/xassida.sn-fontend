import React from "react"
import { RadioGroupItem } from "@radix-ui/react-radio-group"

import { IAmount } from "@/types/donation"
import { DONATIONS } from "@/lib/constants"
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"

interface Props {
  field: any
  frequency?: string | undefined
}

function PaymentOptions({ frequency, field }: Props) {
  const amounts: IAmount[] = DONATIONS.amounts
  return (
    <>
      <p className="mb-4 mt-6 text-base">
        Choisissez un montant pour <b>contribuer</b> au projet
        <span className="lowercase"> {frequency && frequency} 💙.</span>
      </p>
      <RadioGroup
        onValueChange={field.onChange}
        defaultValue={field.value}
        className={`grid grid-cols-2 gap-4 md:grid-cols-6`}
      >
        {amounts.map((amount, index) => (
          <FormItem className="col-span-1 space-y-0" key={index}>
            <RadioGroupItem
              value={amount.price}
              id={amount.ref}
              className="peer sr-only"
            />
            <FormLabel
              htmlFor={amount.ref}
              className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-vert bg-vert-50 p-4 hover:text-accent-foreground peer-data-[state=checked]:bg-vert [&:has([data-state=checked])]:border-vert"
            >
              {amount.label}
            </FormLabel>
          </FormItem>
        ))}
        <Input
          onChange={field.onChange}
          className="col-span-2 h-full border-2 border-vert"
          placeholder="Autre"
          type="number"
        />
        <FormMessage />
      </RadioGroup>
    </>
  )
}

export default React.memo(PaymentOptions)
