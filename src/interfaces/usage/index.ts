import { UserInterface } from 'interfaces/user';
import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface UsageInterface {
  id?: string;
  date: any;
  duration: number;
  distance: number;
  user_id: string;
  vehicle_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vehicle?: VehicleInterface;
  _count?: {};
}

export interface UsageGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  vehicle_id?: string;
}
