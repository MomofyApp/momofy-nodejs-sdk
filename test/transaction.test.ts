import { expect, test } from "vitest";
import { Momofy } from "../src";

// Get Secrete key from the momofy dashboard

const momofy = new Momofy("secret_test_01HQT6N1VZ36B02RPGYE0AV8NY");

let transactionReferenceCode = "";

test("should be able to request payment", async () => {
  let response = await momofy.transaction.requestPayment({
    amount: 30,
    channel: "mobile_money",
    currency: "GHS",
    customer: {
      email: "example@gmail.com",
      name: "Test User",
      phone_number: "024777777",
    },
    provider: "MTN",
    reference_code: "",
    transaction_note: "Payment of 5 items",
  });

  transactionReferenceCode = response.result?.reference_code;
  expect(response.success).toBeTruthy();
  // //   {
  //     success: true,
  //     message: 'Transaction has been initiated',
  //     result: { reference_code: 'dee67adb-bcfc-416b-b08b-b7dbb211a210' },
  //     meta: {}
  //   }
});

test("Should be able to verify Transaction Status", async () => {
  let response = await momofy.transaction.verify(transactionReferenceCode);
  expect(response.success).toBeTruthy();
});

test("Should be able to request checkout transactions", async () => {
  let response = await momofy.transaction.checkout({
    amount: 30,
    redirectUrl: "https://example.com/verify-transaction",
    referenceCode: "",
    transactionNote: "Payment of 30 bills ",
  });

  console.log(response);

  expect(response.success).toBeTruthy();

  // Success Response

  /**  {
     success: true,
     message: 'Checkout created successful',
     result: {
       transaction_ref: '00d67012-90b9-45c1-be9f-06ec8d813ddb',
       checkout_url: 'https://app.momofy.com/checkout/c4e1a0e0-80bd-4925-b7bd-c36e48979f13'
    },
    meta: {}
   }*/
});
