export interface IPlate {
  id: number;
  name: string;
  vegan: boolean;
  price: number;
  count?: number;
}

export class Plate {
  id: number = 0;
  name: string = '';
  vegan: boolean = false;
  price: number = 0;
}
