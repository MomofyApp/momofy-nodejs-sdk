declare enum ProviderTypes {
    MTN = 0,
    VODAFONE = 1,
    ATM = 2,
    ATL = 3,
    MPS = 4
}
declare enum ChannelTypes {
    MOBILE_MONEY = "mobile_money"
}
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
    amount: string;
    reference_code: String;
    customer: Customer;
};
export {};
