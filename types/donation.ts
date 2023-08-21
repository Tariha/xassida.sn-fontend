export interface IDonation {
  types: IDonationType[]
  frequency: IDonationFrequency[]
  amounts: IAmount[]
}

export interface IAmount {
  price: number
  label: string
  ref: string
}

export interface IDonationType {
  value: string
  label: string
  disabled: boolean
}

export interface IDonationFrequency {
  value: string
  label: string
}

export interface IDonationPayment {
  item_name: string
  item_price: string
  currency: string
  ref_command: string
  command_name: string
  env: string
  ipn_url: string
  success_url: string
  cancel_url: string
}
