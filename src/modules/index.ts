import { API_URL } from "../common/endpoints";
import { EnvironmentType } from "../../types";
import { Axios } from "axios";
import { Transaction } from "./transactions";

export class Momofy {
  private readonly http: Axios;
  public transaction: Transaction;

  /**
   * API secrete key
   * @param apiKey
   */
  constructor(private readonly apiKey: string) {
    this.http = new Axios({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
    });

    this.http.interceptors.response.use(
      (response) => (response.data = JSON.parse(response.data))
    );

    this.transaction = new Transaction(this.http);
  }
}
