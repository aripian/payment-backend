import main from './main';

const routes = (app) => {
  const router = app.get('router');

  router.post('/payment', (req, res) => {
    const data = req.body.id;

    main.insertTrans(data, (cb) => {
      res.send(cb);
    });
  });

  router.post('/payment-update', (req, res) => {
    const data = req.body;

    main.updatePayment(data, (cb) => {
      res.send(cb.res);
    });
  });

  app.use('/api', router);
};

module.exports = routes;
