export interface ResponseMessage {
  timestamp: number;
  message: string;
}

export interface LoginSuccessfulResponseMessage extends ResponseMessage {
  token: string;
}
