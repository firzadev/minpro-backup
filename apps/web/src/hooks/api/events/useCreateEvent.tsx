'use client';

import { axiosInstance } from '@/lib/axios';
import { IFormCreateEvent, Event } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const router = useRouter();
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        category,
        location,
        description,
        thumbnail,
        userId,
        end_event,
        start_event,
        limit,
        price,
      } = payload;

      const createEventForm = new FormData();

      createEventForm.append('title', title);
      createEventForm.append('category', category);
      createEventForm.append('location', location);
      createEventForm.append('description', description);
      createEventForm.append('userId', String(userId));
      createEventForm.append('start_event', start_event.toISOString());
      createEventForm.append('end_event', end_event.toISOString());
      createEventForm.append('limit', limit.toString());
      createEventForm.append('price', price.toString());

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });

      await axiosInstance.post<Event>('/events', createEventForm);
      // toast success here
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        //TODO: put toast here
        console.log(error);
      }
    }
  };
  return { createEvent };
};

export default useCreateEvent;
