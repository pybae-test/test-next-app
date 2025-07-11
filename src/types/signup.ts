export interface SignupPayload {
  name?: string;
  email: string;
}

export type SignupResponse =
  | {
      success: true;
    }
  | {
      error: string;
    };
