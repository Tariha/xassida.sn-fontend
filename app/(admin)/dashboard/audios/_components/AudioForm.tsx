import React, { SetStateAction } from "react"
import { createAudio, updateAudio, uploadFile } from "@/actions/api/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
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
  reciter_id: z.number(),
  xassida_id: z.number(),
  file: z.any(),
})

interface Init extends z.infer<typeof formSchema> {
  id: number
}

interface Props {
  setOpen: React.Dispatch<SetStateAction<boolean>>
  init?: Init
}

export default function AudioForm({ setOpen, init }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: init,
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { reciter_id, xassida_id, file } = values
    const name = `${reciter_id}_${xassida_id}`
    try {
      if (!init?.id) await createAudio({ reciter_id, xassida_id, file: name })
      else await updateAudio(init.id, { reciter_id, xassida_id, file: name })

      if (values.file instanceof File) await uploadFile(file, "audios", name)

      setOpen(false)
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
        <div className="flex w-full justify-between pt-2">
          <FormField
            control={form.control}
            name="reciter_id"
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
            name="xassida_id"
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
                    field.onChange(target.files ? target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            className={cn(buttonVariants())}
            disabled={form.formState.isSubmitting}
          >
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
