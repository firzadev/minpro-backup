import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface EventBody
  extends Pick<
    Event,
    | 'userId'
    | 'category'
    | 'description'
    | 'title'
    | 'price'
    | 'location'
    | 'start_event'
    | 'end_event'
    | 'image'
    | 'limit'
    | 'is_free'
    | 'booked'
  > {}

export const createEventService = async (
  body: EventBody,
  file: Express.Multer.File,
) => {
  try {
    const newEvent = await prisma.event.create({
      data: {
        ...body,
        image: `/images/${file.filename}`,
        userId: 1,
      },
    });

    return newEvent;
  } catch (error) {
    throw error;
  }
};
