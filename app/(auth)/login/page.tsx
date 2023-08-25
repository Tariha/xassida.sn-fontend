"use client"

import { useSearchParams } from "next/navigation"
import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import AuthFormsTab from "./components/AuthFormsTab"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const errorMessage =
    "Vérifiez que votre compte est activé et que vous êtes Administrateur"

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Bienvenue</h1>
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
        </div>
        <AuthFormsTab />
      </div>
    </div>
  )
}
