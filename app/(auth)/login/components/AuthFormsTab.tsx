import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { UserAuthForm } from "./UserAuthForm"
import { UserRegisterForm } from "./UserRegistrationForm"

const AuthFormsTab = () => {
  return (
    <Tabs defaultValue="connexion">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="connexion">Connexion</TabsTrigger>
        <TabsTrigger value="inscription">Inscription</TabsTrigger>
      </TabsList>
      <TabsContent value="connexion">
        <Card>
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
            <CardDescription>
              Connectez vous en utilisant vos identifiants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserAuthForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="inscription">
        <Card>
          <CardHeader>
            <CardTitle>Inscription</CardTitle>
            <CardDescription>
              Inscrivez vous en remplissant les champs ci-dessous
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserRegisterForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default AuthFormsTab
