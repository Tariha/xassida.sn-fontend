import React, { useEffect, useState } from "react"
import { RadioGroupItem } from "@radix-ui/react-radio-group"

import { IAmount } from "@/types/donation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"

interface Props {
  amounts: IAmount[]
  frequency?: string | undefined
  handleAmount: (value: IAmount) => void
}

function PaymentOptions({ amounts, frequency, handleAmount }: Props) {
  const [selectedAmount, setAmount] = useState<IAmount>(amounts[1])
  const handleDonationPrice = (value: IAmount) => {
    setAmount(value)
    handleAmount(value)
  }

  const handleOtherPrices = (value: number) => {
    const amount: IAmount = { label: "Autre", price: value, ref: "mnt-0" }
    setAmount(amount)
    handleAmount(amount)
  }
  useEffect(() => {
    setAmount(selectedAmount)
  }, [selectedAmount])

  return (
    <>
      <p className="mb-4 mt-6 text-base capitalize">
        Choisissez un montant pour <b>contribuer</b> au projet{" "}
        {frequency && frequency} 💙.
      </p>
      <RadioGroup
        onValueChange={(a) =>
          handleDonationPrice(amounts.find((t) => t.price === Number(a))!)
        }
        defaultValue={selectedAmount.price.toString()}
        className={`grid grid-cols-2 gap-4 md:grid-cols-6`}
      >
        {amounts.map((amount, index) => (
          <div className="col-span-1 " key={index}>
            <RadioGroupItem
              value={amount.price.toString()}
              id={amount.ref}
              className="peer sr-only"
            />
            <Label
              htmlFor={amount.ref}
              className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-vert bg-vert-50 p-4 hover:text-accent-foreground peer-data-[state=checked]:bg-vert [&:has([data-state=checked])]:border-vert"
            >
              {amount.label}
            </Label>
          </div>
        ))}
        <Input
          onChange={(e) => handleOtherPrices(Number(e.target.value))}
          className="col-span-2 h-full border-2 border-vert"
          placeholder="Autre"
          type="number"
        />
      </RadioGroup>
    </>
  )
}

export default React.memo(PaymentOptions)
