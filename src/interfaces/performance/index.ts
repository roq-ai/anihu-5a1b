import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceInterface {
  id?: string;
  rating: number;
  review: string;
  vehicle_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  review?: string;
  vehicle_id?: string;
  user_id?: string;
}
