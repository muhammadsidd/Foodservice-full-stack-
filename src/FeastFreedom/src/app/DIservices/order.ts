interface OrderBody {
  name: string;
  count: number;
}
export interface Order {
  id: number;
  kitchen_id: number;
  user_id: number;
  items?: OrderBody[];
  total: number;
}
