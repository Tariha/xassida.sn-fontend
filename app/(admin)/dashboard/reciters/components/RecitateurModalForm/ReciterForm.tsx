import React, { SetStateAction, useState } from "react"
import { useStore } from "@/zustand/store"
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

import TarihaSelect from "./TarihaSelect"

const formSchema = z.object({
  name: z.string().min(4),
  picture: z.any(),
  tariha: z.string().min(4),
})

interface Init extends z.infer<typeof formSchema> {
  id: number | string
}

interface Props {
  setOpen: React.Dispatch<SetStateAction<boolean>>
  init?: Init
}

async function postReciter(data: FormData, id: number | string = "") {
  const session: any = await getSession()
  const method = id ? "PATCH" : "POST"
  const url = `${BASE_URL}reciters/` + (id ? `${id}/` : "")
  const resp = await fetcher(url, {
    method,
    body: data,
    headers: { Authorization: `Bearer ${session?.access}` },
  })
  return resp
}

export default function ReciterForm({ setOpen, init }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const mutateReciters = useStore((state) => state.mutateReciters)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: init,
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    if (!(data.picture instanceof File)) delete data.picture
    const form_values = toFormData(data)
    postReciter(form_values, init?.id)
      .then(() => {
        mutateReciters()
        setOpen(false)
      })
      .catch((err) => {
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prenom & Nom</FormLabel>
              <FormControl>
                <Input placeholder="Sam Mboup" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tariha"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confrerie</FormLabel>
              <TarihaSelect field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={({ target }) =>
                    form.setValue(
                      "picture",
                      target.files ? target.files[0] : null
                    )
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
