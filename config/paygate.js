const config = {
  development: {
    merchantKey: 'FFFFFFF',
    merchantCode: 'YYYYYYY',
    currency: 'MYR',
    paygateURL: 'https://lets-pay.asp',
    requeryURL: 'https://lets-pay/enquiry.asp',
    cryptKey: 'thisisatEst',
    responseURL: 'http://localhost:8008/api/payment-update',
    redirectURL: 'http://localhost:3000/payment/',
  },
  staging: {
    merchantKey: 'FFFFFFF',
    merchantCode: 'YYYYYYY',
    currency: 'MYR',
    paygateURL: 'https://lets-pay.asp',
    requeryURL: 'https://lets-pay/enquiry.asp',
    cryptKey: 'thisisatEst',
    responseURL: 'http://localhost:8008/api/payment-update',
    redirectURL: 'http://localhost:3000/payment/',
  },
  production: {
    merchantKey: 'FFFFFFF',
    merchantCode: 'YYYYYYY',
    currency: 'MYR',
    paygateURL: 'https://lets-pay.asp',
    requeryURL: 'https://lets-pay/enquiry.asp',
    cryptKey: 'thisisatEst',
    responseURL: 'http://localhost:8008/api/payment-update',
    redirectURL: 'http://localhost:3000/payment/',
  }
};

module.exports = function(env) {
  var c = config[env];
  return c;
  // return `${ c.engine }://${ c.username }:${ c.password }@${ c.hostname }:${ c.port }/${ c.name }`;
};
