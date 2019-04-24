CREATE TABLE IF NOT EXISTS my_trans (
  id SERIAL PRIMARY KEY,
  ref_no VARCHAR,
  amount VARCHAR,
  trans_id VARCHAR,
  remark VARCHAR,
  authcode VARCHAR,
  status VARCHAR,
  signiture VARCHAR,
  order_id VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);