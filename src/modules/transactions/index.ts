import { Axios } from "axios";
import {
  BadRequest,
  RequestPaymentType,
  SuccessRequest,
} from "../../types";
import endpoints from "../../common/endpoints";

export class Transaction {
  private http: Axios;
  constructor(http: Axios) {
    this.http = http;
  }

  /**
   * requestPayment
   * @param body
   */
  public async requestPayment(
    body: RequestPaymentType
  ): Promise<SuccessRequest> {
    return this.http.post(
      endpoints.transactions.makeTransaction,
      JSON.stringify(body)
    );
  }

  /**
   * Transaction Reference ID
   * @param transactionId
   */
  public async verify(transactionId: string): Promise<SuccessRequest> {
    return this.http.get(
      endpoints.transactions.verifyTransaction + "/" + transactionId
    );
  }
}
