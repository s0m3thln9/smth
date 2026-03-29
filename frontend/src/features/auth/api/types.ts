import type { User } from "@/entities/user/model/types";

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterCredentials {
	email: string;
	password: string;
	username: string;
}

export interface AuthResponse {
	user: User;
}

export interface LogoutResponse {
	ok: boolean;
}
