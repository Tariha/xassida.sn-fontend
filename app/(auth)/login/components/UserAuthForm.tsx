"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(15),
})

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    })

    setIsLoading(false)

    if (signInResult?.error) {
      return toast({
        title: "Quelque chose s'est mal passé",
        description: "Votre connexion a échoué, réeassayer",
        variant: "destructive",
      })
    }

    return toast({
      title: "Connexion Réussie",
      description: "Vous êtes bien connecté",
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="*******"
                        disabled={isLoading}
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
