import { writable } from 'svelte/store';

export interface LoginUser {
	idx: number;
	id: string;
	password: string;
	name: string;
	email: string;
	gender: string;
	createdAt: number;
}
export const loginUser = writable({} as LoginUser | null);
