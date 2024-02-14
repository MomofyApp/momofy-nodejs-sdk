type ProviderTypes = "MTN" | "VODAFONE" | "ATM" | "MPESA";

type ChannelTypes = "mobile_money";

type Customer = {
  name: String;
  email: String;
  phone_number: String;
};

export type RequestPaymentType = {
  provider: ProviderTypes;
  transaction_note: String;
  channel: ChannelTypes;
  currency: String;
  amount: string | number;
  reference_code: String;
  customer: Customer;
};

export enum EnvironmentType {
  PRODUCTION = "production",
  TEST = "test",
}


export interface SuccessRequest {
  success: boolean;
  message: string;
  result: any;
  meta: any;
  status_code: number;
}

export interface BadRequest {
    status_code: number;
    message: string;
  }