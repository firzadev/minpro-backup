import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="bg-[#141461] h-[360px]">
      <div className="grid grid-cols-2 md:grid-cols-4 md:justify-items-center p-6">
        <div className="text-white mt-3">
          <h1 className="font-bold">Tentang</h1>
          <p className="text-sm">About us</p>
          <p className="text-sm">Blogs</p>
        </div>
        <div className="text-white mt-3">
          <h1 className="font-bold">Categories</h1>
          <p className="text-sm">Music</p>
          <p className="text-sm">Sport</p>
          <p className="text-sm">Conference</p>
          <p className="text-sm">Holiday</p>
        </div>
        <div className="text-white mt-3">
          <h1 className="font-bold">Information</h1>
          <p className="text-sm">Privacy and policy</p>
          <p className="text-sm">FAQ</p>
          <p className="text-sm">Tickets</p>
        </div>
        <div className="text-white mt-3">
          <h1 className="font-bold">Organizer</h1>
          <p className="text-sm">Creator</p>
          <p className="text-sm">Sign up</p>
          <p className="text-sm">Sign in</p>
        </div>
      </div>
      <h1 className="text-white font-bold text-xl text-center md:mt-6">
        EVENTIFY
      </h1>
      <div className="flex gap-5 justify-center mt-3">
        <Instagram color="white" />
        <Twitter color="white" />
        <Youtube color="white" />
        <Facebook color="white" />
        <Linkedin color="white" />
      </div>
      <p className="text-white text-center mt-3 text-sm">
        <span>&copy;</span>2024 Eventify. All Rights Reserved
      </p>
    </div>
  );
};
