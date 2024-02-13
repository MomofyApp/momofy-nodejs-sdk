import { expect, test } from "vitest";
import { Momofy } from "../src";

const momofy = new Momofy("secret_test_01HPH70VG02DAYJ1N70NP4QWKV");

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

  expect(response.success).toBeTruthy();
  //   {
  //     success: true,
  //     message: 'Transaction has been initiated',
  //     result: { reference_code: 'dee67adb-bcfc-416b-b08b-b7dbb211a210' },
  //     meta: {}
  //   }
});
