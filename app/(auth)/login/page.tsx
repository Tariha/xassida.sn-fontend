"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AuthForm } from "./_components/AuthForm"

export default function LoginPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <Card className="shadow-lg shadow-vert">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            {"Réservée aux admins et modérateurs"}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-screen max-w-lg gap-4">
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  )
}
