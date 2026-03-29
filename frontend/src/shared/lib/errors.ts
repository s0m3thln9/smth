interface FetchError {
	status: number | string;
	data: unknown;
}

const isFetchError = (error: unknown): error is FetchError =>
	typeof error === "object" && error !== null && "status" in error;

const hasMessage = (data: unknown): data is { message: string } => {
	if (typeof data !== "object" || data === null) return false;
	const record = data as Record<string, unknown>;
	return "message" in record && typeof record.message === "string";
};

export const getApiErrorMessage = (
	error: unknown,
	fallback = "Ошибка",
): string => {
	if (isFetchError(error) && hasMessage(error.data)) {
		return error.data.message;
	}
	if (error instanceof Error) {
		return error.message;
	}
	return fallback;
};
