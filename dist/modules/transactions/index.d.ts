import { Axios } from "axios";
import { RequestPaymentType, SuccessRequest } from "../../common/types";
export declare class Transaction {
    private http;
    constructor(http: Axios);
    /**
     * requestPayment
     * @param body
     */
    requestPayment(body: RequestPaymentType): Promise<SuccessRequest>;
    /**
     * Transaction Reference ID
     * @param transactionId
     */
    verify(transactionId: string): Promise<SuccessRequest>;
}
