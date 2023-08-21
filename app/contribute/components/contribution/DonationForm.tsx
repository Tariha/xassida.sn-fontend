"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { IDonationFrequency } from "@/types/donation"
import { DONATIONS, PAYMENT_HEADERS } from "@/lib/constants"
import { extractZodValuesForTypes } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"

import ContributorInfos from "../contributor/ContributorInfos"
import DonationFrequency from "./DonationFrequency"
import DonationTypes from "./DonationType"
import PaymentAmounts from "./PaymentOptions"

const TYPES_VALUES = extractZodValuesForTypes()

// Ci-dessous nous definissons le schema de validation du formulaire
// en utilisant la librairie zod documentation: https://zod.dev/
const formSchema = z.object({
  type: z.enum(TYPES_VALUES, {
    required_error: "Veuillez selectionner un type de don",
  }),
  amount: z.number().min(100, { message: "Veuillez entrer un montant valide" }),
  email: z.string().email({ message: "Veuillez entrer un email valide" }),
  name: z.string().min(3, { message: "Veuillez entrer un nom valide" }),
})

/* Le composant ci-dessous retourne le formulaire de selection des dons */
export default function DonationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: DONATIONS.types[0].value,
      amount: DONATIONS.amounts[1].price,
    },
  })

  const [isRecurring, setIsRecuring] = useState(false)
  const [frequency, setFrequency] = useState<IDonationFrequency>()

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const randomString = Math.random().toString(36).substring(7)

    let params = {
      item_name: "Contribuer au projet xassida.sn",
      item_price: data.amount,
      currency: "XOF",
      ref_command: randomString,
      command_name: `Paiement de ${data.amount} XOF pour le projet xassida.sn`,
      env: process.env.NEXT_PUBLIC_PAYTECH_ENV!,
      ipn_url: `${process.env.NEXT_PUBLIC_API_URL}/ipn`,
      success_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_HOST}/cancel`,
      custom_field: JSON.stringify({
        custom_fiel1: data.email,
        custom_fiel2: data.name,
      }),
    }

    await fetch(process.env.NEXT_PUBLIC_PAYTECH_PAYMENT_URL!, {
      method: "POST",
      body: JSON.stringify(params),
      headers: PAYMENT_HEADERS,
    })
      .then(function (response: any) {
        return response.json()
      })
      .then(function (jsonResponse: any) {
        window.location.href = jsonResponse.redirectUrl
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/*  Le composant ci-dessous retourne les types de donations regulier ou ponctuel  */}
        <DonationTypes
          types={DONATIONS.types}
          handleDonationType={(donation) => {
            setIsRecuring(donation.value === "recurring")
            form.setValue("type", donation.value)
          }}
        />

        {/* Le composant ci-dessous retourne la fréquence de
        donations si le type de donation selectioné est réguliers */}
        {isRecurring && (
          <DonationFrequency
            handleFrequency={(frequency) => setFrequency(frequency)}
            frequencies={DONATIONS.frequency}
          />
        )}

        {/* Le composant ci-dessous retourne les options de paiement */}
        <PaymentAmounts
          frequency={frequency?.label}
          amounts={DONATIONS.amounts}
          handleAmount={(amount) => form.setValue("amount", amount.price)}
        />

        <Separator className="my-8 bg-slate-500" />

        {/* Le composant ci-dessous retourne un formulaire pour avoir 
            des informations suplementaires sur les contributeurs */}
        <ContributorInfos
          handleContributorInfos={(i) => {
            form.setValue("email", i.email)
            form.setValue("name", i.name)
          }}
        />

        <Button className="mt-8" type="submit">
          Faire un don
        </Button>
      </form>
    </Form>
  )
}
