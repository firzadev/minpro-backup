'use client';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { Key, Mail, Ticket, User } from 'lucide-react';
import { RegisterValidationSchema } from './registerValidationSchema';

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      reff: '',
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      try {
        register(values);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="h-full bg-[#1F1F95] rounded-r-2xl md:flex justify-center items-center hidden md:block">
        <h1 className="mx-auto text-white font-bold text-2xl">EVENTIFY.</h1>
      </div>
      <div className="max-w-full h-[600px]">
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[500px] mx-auto h-full flex flex-col space-y-5 justify-center px-10"
        >
          <h1 className="font-bold text-xl md:py-5">Sign up</h1>

          <div className="space-y-2">
            <h1 className="font-semibold text-[15px]">Username</h1>
            <label className="input input-bordered flex items-center gap-2 rounded-lg h-[40px]">
              <User color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-[15px]">Email</h1>
            <label className="input input-bordered flex items-center gap-2 rounded-lg h-[40px]">
              <Mail color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-[15px]">Password</h1>
            <label className="input input-bordered flex items-center gap-2 rounded-lg h-[40px]">
              <Key color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <div className="space-y-2">
            <h1 className="font-semibold text-[15px]">Refferal</h1>
            <label className="input input-bordered flex items-center gap-2 rounded-lg h-[40px]">
              <Ticket color="gray" size={20} />
              <input
                type="text"
                className="grow"
                placeholder="Refferal"
                name="reff"
                value={formik.values.reff}
                onChange={formik.handleChange}
              />
            </label>
          </div>

          <button
            className="btn bg-[#1F1F95] w-full rounded-lg text-white"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
