import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface CreateEventBody
  extends Omit<
    Event,
    'id' | 'createdAt' | 'updatedAt' | 'thumbnail' | 'is_free' | 'booked'
  > {}

export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
) => {
  try {
    const {
      title,
      category,
      description,
      limit,
      location,
      price,
      end_event,
      start_event,
      userId,
    } = body;

    const newEvent = await prisma.$transaction(async (tx) => {
      const event = await tx.event.create({
        data: {
          ...body,
        },
      });

      await tx.location.create({
        data: {},
      });
    });

    return await prisma.event.create({
      data: {
        title: title,
        category: category,
        price: Number(price),
        description: description,
        limit: Number(limit),
        location: location,
        // start_event: new Date(start_event),
        start_event: '2011-10-05T14:48:00.000Z',
        end_event: '2011-10-05T14:48:00.000Z',
        // end_event: new Date(end_event),
        thumbnail: `/images/${file.filename}`,
        // booked: 0,
        // is_free: false,
        userId: Number(userId),
      },
    });
  } catch (error) {
    throw error;
  }
};
