"use client"
import { Button } from "@/components/ui/button"
import {   
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { DONATIONS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { IDonationType } from "@/types/donation"
import { useState } from "react"
import PaymentOptions from "./PaymentOptions"

/* Le composant ci-dessous retourne le formulaire de selection des dons */
export default function DonationTile() {
    const [isRecurring, setIsRecuring] = useState(false)
    const [frequency, setFrequency] = useState("")
    console.log(frequency);
    
    return (
        <form>
            <DonationTypes handleDonationType={(donation)=>setIsRecuring(donation === 'recurring')} />
            {isRecurring && <DonationFrequency handleFrequency={(frequency)=>setFrequency(frequency)} frequencies={DONATIONS.frequency} />}
            <PaymentOptions frequency={frequency} amounts={DONATIONS.amounts} />
        </form>
    )
}
/* 
   Ce composant permet de selectionner le type de don.
   C'est à dire "one-time" pour les paiments en une fois et "recurring" pour 
   les paiements à intervale réguliers 
*/
interface TypeProps {
    handleDonationType: (value: string) => void
}

const DonationTypes = ({handleDonationType}:TypeProps) => {

    const [donationType, setDonationType] = useState("one-time")
    handleDonationType(donationType);
    
    return <div className="grid w-full h-12 grid-cols-2 border-2 p-0 border-vert rounded-lg">
        {DONATIONS.types.map((type, index) => (
            <label
                key={index}
                htmlFor={`${type.value}-${index}`}
                className={cn(
                    "h-full font-normal text-base rounded-sm flex items-center justify-center cursor-pointer",
                    donationType === type.value && "bg-vert font-semibold"
                )}
            >
                {type.label}
                <input
                    className="hidden"
                    id={`${type.value}-${index}`}
                    name="donation-type"
                    key={type.value}
                    onChange={() => setDonationType(type.value)}
                    type="radio"
                    value={type.value}
                />
            </label>
        ))}
    </div>
}

interface FrequencyProps {
    frequencies: IDonationType[],
    handleFrequency: (value: string) => void
}
const DonationFrequency = ({frequencies, handleFrequency}:FrequencyProps) => {
    const [selectedfrequency, setSelectedFrequency] = useState("monthly")
    handleFrequency(selectedfrequency);
    return <div className="my-4">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="border-2 border-vert" variant="outline">Dons réguliers</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border border-card-foreground bg-card w-56">
            <DropdownMenuLabel><em>Choisissez: </em></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={selectedfrequency} onValueChange={setSelectedFrequency}>
            {frequencies.map((freq, index) => (<DropdownMenuRadioItem key={index} value={freq.value}>{freq.label}</DropdownMenuRadioItem>))}
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>
}