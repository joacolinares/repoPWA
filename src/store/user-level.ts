import { create } from 'zustand'

export interface DataMembers {
    level: number | null
    numberOfMembers: number | null
    totalStaking: string
    residual: string,
    membersInfo?: { wallet: string, name: string, sponsor: string, totalStaking: string }[]
}

interface DataMembersActions {
	selectPlan: (userPlan: DataMembers) => void
}

export const useUserLevelStore = create<DataMembers & DataMembersActions>((set) => ({
    level: null,
    numberOfMembers: null,
    totalStaking: '',
    residual: '',
    membersInfo: [
        {
            wallet: '',
            name: '',
            sponsor: '',
            totalStaking: '',
        }
    ],
    selectPlan: (value) => set(state => ({ 
		...state,
		...value
	 })),
}))