import {Make} from "./make.model";
import {Model} from "./model.model";
import {Condition} from "./condition.model";
import {Dealer} from "./dealer.model";
import {Style} from "./style.model";
import {Deserializable} from "./deserializable.model";

export class Car implements Deserializable{
    // tslint:disable-next-line: variable-name
    _id?: string;
    make?: Make;
    model?: Model;
    style?: Style;
    condition?: Condition;
    dealer?: Dealer;
    year?: number;
    price?: number;
    mileage?: number;
    imagePath?: string;
    zipCode?: string;
    uploadDate?: Date;
    deserialize(input: any) {
        Object.assign(this, input);
        this.make = new Make().deserialize(input.make);
        this.model = new Model().deserialize(input.model);
        this.style = new Style().deserialize(input.style);
        this.condition = new Condition().deserialize(input.condition);
        this.dealer = new Dealer().deserialize(input.dealer);
        return this;
      }
  }