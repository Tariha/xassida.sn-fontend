"use client"

import React, { SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { createReciter, updateReciter } from "@/actions/api/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { slugify } from "@/lib/utils"
import uploadFile from "@/hooks/useUpload"
import { Button } from "@/components/ui/button"
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
  id: number
}

interface Props {
  init?: Init
}

export default function ReciterForm({ init }: Props) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: init,
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, tariha, picture } = values
    const slug = slugify(`${tariha}_${name}`)
    const path = `reciters/${slug}`
    try {
      if (!init?.id) await createReciter({ name, tariha, slug, picture: path })
      else await updateReciter(init.id, { name, tariha, picture: path })

      if (values.picture instanceof File)
        await uploadFile(picture, "images/reciters", slug)

      router.refresh()
    } catch {
      return toast({
        title: "Quelque chose s'est mal passé",
        description: "",
        variant: "destructive",
      })
    }
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
                    field.onChange(target.files ? target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && (
              <Loader className="mr-2 size-4 animate-spin" />
            )}
            Soumettre
          </Button>
        </div>
      </form>
    </Form>
  )
}
