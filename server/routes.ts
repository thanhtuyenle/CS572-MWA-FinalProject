import * as express from 'express';

import UserCtrl from './controllers/user';
import CarCtrl from './controllers/car';

export default function setRoutes(app) {

  const router = express.Router();

  const carCtrl = new CarCtrl();
  const userCtrl = new UserCtrl();

  // Cars
  router.route('/cars').get(carCtrl.getAll);
  router.route('/cars/count').get(carCtrl.count);
  router.route('/car').post(carCtrl.insert);
  router.route('/car/:id').get(carCtrl.get);
  router.route('/car/:id').put(carCtrl.update);
  router.route('/car/:id').delete(carCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our applicarion with the prefix /api
  app.use('/api', router);

}
