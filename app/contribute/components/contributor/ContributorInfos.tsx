import React from "react"
import { Control } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface Props {
  formControl: Control<any, any>
}

const ContributorInfos = ({ formControl }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <FormField
        name="name"
        control={formControl}
        render={({ field }) => (
          <FormItem className="mb-2 grid w-full max-w-sm items-center gap-2">
            <FormLabel htmlFor="name">Nom</FormLabel>
            <FormControl>
              <Input
                className="border-2 border-vert"
                placeholder="Nom"
                type="text"
                id="name"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="email"
        control={formControl}
        render={({ field }) => (
          <FormItem className="mb-2 grid w-full max-w-sm items-center gap-2">
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <Input
                className="border-2 border-vert"
                type="email"
                id="email"
                placeholder="Email"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
export default React.memo(ContributorInfos)
