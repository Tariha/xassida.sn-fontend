"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { signInWithEmail } from "@/actions/api/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(15),
})

type FormData = z.infer<typeof formSchema>

export function AuthForm() {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function signIn(values: z.infer<typeof formSchema>) {
    try {
      await signInWithEmail(values)
      router.replace("/dashboard")
    } catch {
      return toast({
        description: "Authentification failed",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(signIn)}>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="sallalioune28@gmail.com"
                    autoCapitalize="none"
                    disabled={form.formState.isSubmitting}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="*******"
                    disabled={form.formState.isSubmitting}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 w-full" disabled={form.formState.isLoading}>
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
