export interface IDonation {
    types:     IDonationType[];
    frequency: IDonationType[];
    amounts:    IAmount[];
}

export interface IAmount {
    price: number;
    label: string;
    ref:   string;
}

export interface IDonationType {
    value: string;
    label: string;
}
