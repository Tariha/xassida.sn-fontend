import { IAmount, IDonationType } from '@/types/donation'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
    amounts: IAmount[]
    frequency?: string |undefined
}

function PaymentOptions({ amounts, frequency }: Props) {
    const [selectedAmount, setAmount] = useState(5000);
    const handleDonationPrice = (value: any) => {
        return setAmount(parseInt(value))
    }

    useEffect(() => {
        handleDonationPrice(selectedAmount)
    }, [selectedAmount]);
    return (
        <>
            <p className="mb-4 mt-6 text-base">Choisissez un montant pour <b>contribuer</b> au projet {frequency && frequency} 💙. </p>
            <div className='flex'>
                <div className="flex items-center w-7/12 gap-3">
                    {amounts.map((amount, index) => (
                        <label key={index} className={cn(
                            "flex-1 rounded-lg p-3 border-2 border-vert cursor-pointer text-center ",
                            selectedAmount === amount.price && "bg-vert text-white font-semibold"
                        )}>
                            {amount.label}
                            <input key={index}
                                className="hidden"
                                name="amount"
                                type="radio"
                                checked={selectedAmount == amount.price}
                                onChange={e => handleDonationPrice(e.target.value)}
                                value={amount.price}
                            />
                        </label>
                    ))}
                </div>
                <div className="flex items-center w-5/12 px-3">
                    <input 
                    type="number" 
                    placeholder='8000 Fcfa'
                    className='w-full px-3 h-full rounded-lg border-2 bg-transparent border-vert outline-none'
                    />
                </div>
            </div>
        </>)
}

export default React.memo(PaymentOptions)