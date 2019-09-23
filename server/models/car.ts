import * as mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  make: {_id:String, name: String},
  model: {_id:String, name: String},
  style: {_id:String, name: String},
  condition: {_id:String, name: String},
  year: Number,
  price: Number,
  zipCode: String
});

const Car = mongoose.model('Car', carSchema);

export default Car;
