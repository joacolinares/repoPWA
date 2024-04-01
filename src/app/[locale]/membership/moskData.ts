export interface PlansMembership {
    plan: string
    price: string
    profitReferralsMembership: string
    profitReferralsEarnings: string
}

const plansMembership = [
    {
        plan: "Basic",
        price: "35.00",
        profitReferralsMembership: "20%",
        profitReferralsEarnings: "10%",
    },
    {
        plan: "Essential",
        price: "50.00",
        profitReferralsMembership: "40%",
        profitReferralsEarnings: "20%",
    },
    {
        plan: "Premium",
        price: "65.00",
        profitReferralsMembership: "80%",
        profitReferralsEarnings: "40%",
    }
]

export default plansMembership