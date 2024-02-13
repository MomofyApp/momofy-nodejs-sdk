export const API_URL = "https://momofy-api-staging.up.railway.app";
export default {
  transactions: {
    makeTransaction: API_URL + "/transactions/request",
    verifyTransaction: API_URL + "/transactions/verify",
    listTransactions: API_URL + "/transactions",
  },
};
