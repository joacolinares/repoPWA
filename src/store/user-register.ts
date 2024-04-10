import { create } from 'zustand'
import { E164Number } from 'libphonenumber-js/core';

export interface UserRegisterState {
	email: string
	fullName: string
	username: string
	phoneNumber: E164Number | null
	country: string
	gender: string
	dateOfBirth: string
}

interface UserRegisterActions {
	updateUser: (userRegister: UserRegisterState) => void
}

export const useUserRegisterStore = create<UserRegisterState & UserRegisterActions>((set) => ({
	email: '',
	fullName: '',
	username: '',
	phoneNumber: null,
	country: '',
	gender: '',
	dateOfBirth: '',
	updateUser: (value) => set(state => ({ 
		...state,
		...value
	 })),
}))