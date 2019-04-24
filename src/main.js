// import Request from 'request';
// import axios from 'axios';
// import moment from 'moment';
import cryptojs from 'crypto-js';
import { logger } from './utils/logger';
import { env } from '../config/app';
import paygate from '../config/paygate';
import db from './utils/db';
import Q from './queries';

const {
  merchantKey,
  merchantCode,
  currency,
  paygateURL,
  requeryURL,
  responseURL,
} = paygate(env);

const getSignature = (params) => {
  const sig = cryptojs.SHA256(params).toString();
  return sig;
};

const genTransNo = (id) => {
  const str = `${ id }`;
  const pad = '0000000';
  const ans = `${ pad.substring(0, pad.length - str.length) }${ str }`;

  const modDate = `0${ (new Date().getDate()).toString() }`;
  const modMonth = `0${ ((new Date().getMonth() + 1)).toString() }`;

  return `${ modMonth.slice(-2) }${ modDate.slice(-2) }${ ans }`;
};

const insertTrans = (data, cb) => {
  db.query(Q.getOrder, [data.id], (err, res) => {
    if (err) {
      logger.error(err.stack);
      res.json({ error: 'Error getting order data' });
    }

    console.log(res.rows[0]);
    const transData = [];
    transData.push('');
    transData.push(res.rows[0].price);
    transData.push(genTransNo('ODR'));
    transData.push('Item order');
    transData.push('');
    transData.push('start');
    transData.push(getSignature(merchantKey + merchantCode + currency));
    transData.push(data.id);

    db.query(Q.insertTrans, transData, (e, r) => {
      if (e) {
        logger.error(err.stack);
        res.json({ error: 'Error getting order data' });
      }
      cb({
        data: r.rows[0],
        merchantKey,
        merchantCode,
        paygateURL,
        requeryURL,
        responseURL,
      });
    });
  });
};

const updatePayment = (data, cb) => {
  db.query(Q.updatePayment, [data.ref_no, data.trans_id, data.authcode, data.status], (err, res) => {
    if (err) {
      logger.error(err.stack);
      res.json({ error: 'Error updating order data' });
    }
    logger.warn(res);
    logger.warn(res.rows[0]);
    cb({
      res,
    });
  });
};

module.exports = {
  insertTrans,
  updatePayment,
};
