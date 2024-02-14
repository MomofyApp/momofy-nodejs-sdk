import { Transaction } from "./transactions";
export declare class Momofy {
    private readonly apiKey;
    private readonly http;
    transaction: Transaction;
    /**
     * API secrete key
     * @param apiKey
     */
    constructor(apiKey: string);
}
