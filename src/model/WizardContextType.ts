type WizardContextType={
    from: {
        name: string,
        street: string,
        city: string,
        state: string,
        zip: string
    },
    to: {
        name: string,
        street: string,
        city: string,
        state: string,
        zip: string
    },
    weight: number,
    shippingOption: number
}

export default WizardContextType;