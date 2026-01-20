export type AppErrorCode =
  | "UNAUTHORIZED"
  | "NETWORK"
  | "TIMEOUT"
  | "NOT_FOUND"
  | "VALIDATION"
  | "UNKNOWN";

export type ActionErrorCode =
  | "UNAUTHORIZED"
  | "NETWORK"
  | "TIMEOUT"
  | "VALIDATION"
  | "UNKNOWN";

export class AppError extends Error {
  code: AppErrorCode;

  constructor(code: AppErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

export type ActionResult = {
  success: boolean;
  message: string;
  code?: ActionErrorCode;
};

export type FavoriteState = ActionResult & {
  favoriteId: string | null;
};
