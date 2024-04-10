import { create } from 'zustand'

export interface PlansMembership {
    plan: string
    price: string
    profitReferralsMembership: string
    profitReferralsEarnings: string
}

interface UserPlanActions {
	updateUser: (userPlan: PlansMembership) => void
}

export const useUserPlanStore = create<PlansMembership & UserPlanActions>((set) => ({
    plan: '',
    price: '',
    profitReferralsMembership: '',
    profitReferralsEarnings: '',
    updateUser: (value) => set(state => ({ 
		...state,
		...value
	 })),
}))