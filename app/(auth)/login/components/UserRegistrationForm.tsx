"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { BASE_URL } from "@/lib/api"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
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

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const userAuthSchema = z
  .object({
    username: z.string().min(4).max(15),
    email: z.string().email(),
    password1: z.string().min(6).max(15),
    password2: z.string().min(6).max(15),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  })

type FormData = z.infer<typeof userAuthSchema>

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    const resp = await fetch(BASE_URL + "auth/register/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })

    setIsLoading(false)
    const resp_data = await resp.json()
    const keys = Object.keys(resp_data)

    if (!resp.ok) {
      return toast({
        title: "Quelque chose s'est mal passé",
        description: resp_data[keys[0]][0],
        variant: "destructive",
      })
    }

    return toast({
      title: "Inscription Réussie",
      description: "Un mail de confirmation vous a été envoyé",
    })
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom Utilisateur</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="sallalioune28"
                        autoCapitalize="none"
                        autoCorrect="off"
                        autoComplete="username"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
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
                        autoCorrect="off"
                        autoComplete="email"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="*******"
                        disabled={isLoading}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmer</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="*******"
                        disabled={isLoading}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button className={cn(buttonVariants())} disabled={isLoading}>
              {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
              Soumettre
            </button>
          </div>
        </form>
      </Form>
    </div>
  )
}
