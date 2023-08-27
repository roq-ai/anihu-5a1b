import { PerformanceInterface } from 'interfaces/performance';
import { ReservationInterface } from 'interfaces/reservation';
import { UsageInterface } from 'interfaces/usage';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  model: string;
  make: string;
  year: number;
  mileage: number;
  color: string;
  license_plate: string;
  created_at?: any;
  updated_at?: any;
  performance?: PerformanceInterface[];
  reservation?: ReservationInterface[];
  usage?: UsageInterface[];

  _count?: {
    performance?: number;
    reservation?: number;
    usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  make?: string;
  color?: string;
  license_plate?: string;
}
