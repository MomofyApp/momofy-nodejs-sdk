!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("axios")):"function"==typeof define&&define.amd?define(["exports","axios"],i):i((t||self).sdk={},t.axios)}(this,function(t,i){var e="https://api.momofy.com",n={transactions:{makeTransaction:e+"/transactions/request",verifyTransaction:e+"/transactions/verify",listTransactions:e+"/transactions"}},s=/*#__PURE__*/function(){function t(t){this.http=void 0,this.http=t}var i=t.prototype;return i.requestPayment=function(t){try{return Promise.resolve(this.http.post(n.transactions.makeTransaction,JSON.stringify(t)))}catch(t){return Promise.reject(t)}},i.verify=function(t){try{return Promise.resolve(this.http.get(n.transactions.verifyTransaction+"/"+t))}catch(t){return Promise.reject(t)}},t}();t.Momofy=function(t){this.apiKey=void 0,this.http=void 0,this.transaction=void 0,this.apiKey=t,this.http=new i.Axios({baseURL:e,headers:{Authorization:"Bearer "+this.apiKey,"Content-Type":"application/json"}}),this.http.interceptors.response.use(function(t){return t.data=JSON.parse(t.data)}),this.transaction=new s(this.http)}});
//# sourceMappingURL=index.umd.js.map