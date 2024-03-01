import { Axios } from "axios";
import { BadRequest, RequestPaymentType, SuccessRequest } from "../../types";
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

  /**
   *  Request checkout URL
   *
   * @param {Object} requestBody information required to make request to checkout API
   * @param {string} requestBody.transactionNote transaction note
   * @param {string | number} requestBody.amount amount to request from customer
   * @param {string} requestBody.referenceCode reference code (optional)
   * @param {string} requestBody.redirectUrl redirect url
   *
   */
  public checkout(requestBody: {
    transactionNote: string;
    amount: number;
    referenceCode: string;
    redirectUrl: string;
  }): Promise<SuccessRequest> {
    let body = {
      amount: requestBody.amount,
      transaction_note: requestBody.transactionNote,
      redirect_url: requestBody.redirectUrl,
      reference_code: requestBody.referenceCode,
    };
    return this.http.post(
      endpoints.transactions.checkout,
      JSON.stringify(body)
    );
  }
}
