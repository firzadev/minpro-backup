import { Menu, Search } from 'lucide-react';

export const Header = () => {
  return (
    <div className="navbar bg-[#1F1F95] w-full h-[80px]">
      <div className="md:w-[85%] w-full md:mx-auto md:flex md:gap-5">
        <div className="navbar-start">
          <h1 className="text-white  font-bold text-xl">EVENTIFY.</h1>
        </div>
        <div className="navbar-start flex gap-10 text-white justify-center">
          <h3 className=" hidden md:block">Explore</h3>
          <h3 className=" hidden md:block">Explore</h3>
          <h3 className=" hidden md:block">Explore</h3>
        </div>
        <div className="md:navbar-end navbar-end flex gap-3 items-center">
          <Search color="white" />
          <button className="btn btn-primary btn-sm hidden md:block">
            Register
          </button>
          <Menu color="white" className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

// <div className="navbar bg-[#1F1F95] mx-auto max-w-full h-[80px]">
//   <div className=" md:w-[95%]">
//     <div className="navbar-start p-3 md:max-w-[95%]  md:w-[130px]">
//       <h1 className="text-white font-semibold text-lg md:font-bold md:text-2xl  md:w-[120px]">
//         Eventify.
//       </h1>
//     </div>
//   </div>

//   <div className="navbar-end gap-3 p-3 w-full md:hidden">
//     <Search color="white" />
//     <Menu color="white" />
//   </div>
// </div>
