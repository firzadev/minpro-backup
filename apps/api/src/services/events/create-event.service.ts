import { Event } from '@prisma/client';

interface ICreateEvent extends Omit<Event, 'id' | 'createdAt' | 'updatedAt'> {}

export const createEventService = async (body: ICreateEvent) => {};
