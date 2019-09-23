import Car from '../models/car';
import BaseCtrl from './base';

export default class CarCtrl extends BaseCtrl {
  model = Car;
  search = async (req, res) => {
    try {
      let conditions = [{}]
      if(req.params.makeId != 'ALL') {
        conditions.push({"make._id": req.params.makeId})
      }
      if(req.params.modelId != 'ALL') {
        conditions.push({"model._id": req.params.modelId})
      }
      if(req.params.zipcode != '') {
        conditions.push({"zipCode": req.params.zipcode})
      }
      const obj = await this.model.find({$and:conditions});
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

}
