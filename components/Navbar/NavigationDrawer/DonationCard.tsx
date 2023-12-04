import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const DonationCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl">Soutenez le Projet</CardTitle>
    </CardHeader>
    <CardContent>
      <p>
        {
          "Votre don contribue à préserver, diffuser et améliorer l'expérience Xassida pour des milliers de personnes à travers le monde. Chaque contribution, grande ou petite, façonne notre communauté spirituelle."
        }
      </p>
    </CardContent>
    <CardFooter>
      <Button size="lg" className="text-md bg-vert hover:bg-vert/90">
        <a
          href="https://koparexpress.com/apps/collectes/r830jt9qe"
          target="_blank"
          rel="noreferrer"
        >
          Contribuer
        </a>
      </Button>
    </CardFooter>
  </Card>
)

export default DonationCard
