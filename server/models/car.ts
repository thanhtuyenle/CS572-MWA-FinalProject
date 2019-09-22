import * as mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  year: Number,
  price: Number,
  zipCode: String
});

const Car = mongoose.model('Car', carSchema);

export default Car;
