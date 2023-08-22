import React, { SetStateAction, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { getSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { BASE_URL, fetcher } from "@/lib/api"
import { cn, toFormData } from "@/lib/utils"
//import { toFormData } from "@/lib/utils"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

import ReciterSelect from "./ReciterSelect"
import XassidaSelect from "./XassidaSelect"

const formSchema = z.object({
  reciter: z.number(),
  xassida: z.number(),
  file: z.any(),
})

interface Init extends z.infer<typeof formSchema> {
  id: number | string
}

interface Props {
  setOpen: React.Dispatch<SetStateAction<boolean>>
  init?: Init
}

async function postAudio(data: FormData, id: number | string = "") {
  const session: any = await getSession()
  const method = id ? "PUT" : "POST"
  const url = `${BASE_URL}audios/` + (id ? `${id}/` : "")
  const resp = await fetcher(url, {
    method,
    body: data,
    headers: { Authorization: `Bearer ${session?.access}` },
  })
  return resp
}

export default function AudioForm({ setOpen, init }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: init,
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const form_values = toFormData(data)
    postAudio(form_values, init?.id)
      .then(() => {
        setOpen(false)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        return toast({
          title: "Quelque chose s'est mal passé",
          description: "",
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex w-full justify-between pt-2">
          <FormField
            control={form.control}
            name="reciter"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Recitateur</FormLabel>
                <ReciterSelect field={field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="xassida"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Xassida</FormLabel>
                <XassidaSelect field={field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fichier (mp3)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={({ target }) =>
                    form.setValue("file", target.files ? target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Soumettre
          </Button>
        </div>
      </form>
    </Form>
  )
}
