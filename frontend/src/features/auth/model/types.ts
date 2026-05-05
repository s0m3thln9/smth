export type AuthModalMode = "login" | "register";

export interface AuthModalState {
	isOpen: boolean;
	mode: AuthModalMode;
}
