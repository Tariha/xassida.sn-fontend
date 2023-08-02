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
      <CardTitle className="text-xl">Become a monthly donator</CardTitle>
    </CardHeader>
    <CardContent>
      <p>
        Monthly donations help us improve Xassida.sn and sustain operations so
        we focus less on fundraising and more on creating impact.
      </p>
    </CardContent>
    <CardFooter>
      <Button size="lg" className="text-md bg-vert hover:bg-vert/90">
        Donate Monthly
      </Button>
    </CardFooter>
  </Card>
)

export default DonationCard
