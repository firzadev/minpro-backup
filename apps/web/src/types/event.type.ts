import { IUser } from './user.type';

export interface Event {
  id: number;
  title: string;
  price: number;
  location: string;
  description: string;
  limit: number;
  booked?: number;
  is_free?: boolean;
  start_event: Date;
  end_event: Date;
  category: string;
  userId: number;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}

export interface IFormCreateEvent {
  title: string;
  category: string;
  price: number;
  thumbnail: File[];
  location: string;
  description: string;
  userId?: number;
  limit: number;
  start_event: Date;
  end_event: Date;
}
