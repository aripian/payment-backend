const insertTrans = 'INSERT INTO my_trans VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, DEFAULT) RETURNING *;';
const getOrder = 'SELECT * FROM my_order WHERE id = $1;';
const updateStatus = 'UPDATE my_order SET status = $1 WHERE token = $2 AND id = $3;';

export default {
  insertTrans,
  getOrder,
  updateStatus,
};
