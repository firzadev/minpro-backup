'use client';

// import Dropzone from '@/components/Dropzone';
import Dropzone from '@/components/event/Dropzone';
// import FormInput from '@/components/FormInput';
import FormInput from '@/components/event/FormInput';
// import FormTextArea from '@/components/FormTextArea';
// import PreviewImages from '@/components/PreviewImages';
import PreviewImages from '@/components/event/PreviewImages';
// import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button';
// import { useAppSelector } from '@/redux/hooks';
import { useFormik } from 'formik';
// import { validationSchema } from './validationSchema.ts';
import { Calendar } from '@/components/ui/calendar';
import useCreateEvent from '@/hooks/api/events/useCreateEvent';
import { IFormCreateEvent } from '@/types/event.type';
import { validationSchemaEvent } from './validationSchema';
// import { SelectSingleEventHandler } from 'shadcn';
// import AuthGuard from '@/hoc/AuthGuard';
const Write = () => {
  const { createEvent } = useCreateEvent();
  // const { id } = useAppSelector((state) => state.user);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateEvent>({
    initialValues: {
      title: '',
      category: '',
      thumbnail: [],
      description: '',
      limit: 0,
      end_event: new Date(),
      start_event: new Date(),
      location: '',
      price: 0,
    },
    validationSchema: validationSchemaEvent,
    onSubmit: async (values) => {
      try {
        await createEvent({ ...values, userId: 1 });
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDateSelectStart = (date: Date) => {
    if (date instanceof Date) {
      setFieldValue('start_event', date); // Update start_event field in form values
    }
  };

  const handleDateSelectEnd = (date: Date) => {
    if (date instanceof Date) {
      setFieldValue('start_event', date); // Update start_event field in form values
    }
  };

  return (
    <main className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <FormInput
            name="title"
            type="text"
            label="Title"
            placeholder="Title"
            value={values.title}
            error={errors.title}
            isError={!!touched.title && !!errors.title}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInput
            name="category"
            type="text"
            label="Category"
            placeholder="Category"
            value={values.category}
            error={errors.category}
            isError={!!touched.category && !!errors.category}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInput
            name="description"
            type="text"
            label="Description"
            placeholder="Description"
            value={values.description}
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInput
            name="location"
            type="text"
            label="Location"
            placeholder="Location"
            value={values.location}
            error={errors.location}
            isError={!!touched.location && !!errors.location}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInput
            name="limit"
            type="number"
            label="Limit"
            placeholder="Limit"
            value={values.limit.toString()}
            error={errors.limit}
            isError={!!touched.limit && !!errors.limit}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInput
            name="price"
            type="number"
            label="Price"
            placeholder="Price"
            value={values.price.toString()}
            error={errors.price}
            isError={!!touched.price && !!errors.price}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <Calendar
            mode="single"
            selected={values.start_event}
            onSelect={handleDateSelectStart}
            onChange={(date: Date) => setFieldValue('start_event', date)}
            initialFocus
          />

          <Calendar
            mode="single"
            selected={values.end_event}
            onSelect={handleDateSelectEnd}
            initialFocus
          />

          {/* <FormTextArea
            name="description"
            label="Description"
            placeholder="Description"
            value={values.description}
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          /> */}
          <PreviewImages
            fileImages={values.thumbnail}
            onRemoveImage={(idx: number) =>
              setFieldValue('thumbnail', values.thumbnail?.toSpliced(idx, 1))
            }
          />
          <Dropzone
            isError={Boolean(errors.thumbnail)}
            label="Thumbnail"
            onDrop={(files) =>
              setFieldValue('thumbnail', [
                ...values.thumbnail,
                ...files.map((file) => file),
              ])
            }
          />
          {/* <RichTextEditor
            onChange={(html: string) => setFieldValue('content', html)}
            label="Content"
            value={values.content}
            isError={Boolean(errors.content)}
          /> */}
          <div className="mb-4 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Write;
