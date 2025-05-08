import {myDate} from "./DataType";

interface Offprice {
  id: string;
  slider_id: number;
  discount_percentage: number;
  discount_start: myDate;
  discount_end: myDate;
  created_at: myDate;
}

export default Offprice;
