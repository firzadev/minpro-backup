import { Calendar, Hourglass, Locate } from 'lucide-react';
import React from 'react';

const EventDetail = () => {
  return (
    <div className="p-3 space-y-1.5 md:w-[85%] md:mx-auto">
      <div className="md:grid md:grid-cols-3">
        <div className="md:space-y-1.5 md:col-span-2">
          <h1 className="badge badge-primary p-3 badge-md text-white">
            category
          </h1>
          <h1 className="font-bold text-xl">Cherrypop Festival</h1>
          <img
            src="/evt.jpg"
            alt=""
            className="h-[150px] w-[500px] md:h-[230px] md:w-full rounded-lg"
          />
          <div className="flex items-center gap-3">
            <div className="avatar mt-3">
              <div className="w-12 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="w-12"
                />
              </div>
            </div>
            <div className="">
              <h3 className="font-semibold text-gray-500">Organizer</h3>
              <h3 className="font-bold">Cherrypop sejahtera</h3>
            </div>
          </div>
        </div>

        <div className="md:space-y-1.5 md:p-6">
          <div className="space-y-1.5">
            <h1 className="font-bold text-lg my-5 ">Detail Event</h1>
            <div className="flex gap-3 items-center">
              <Calendar color="purple" />
              <div>
                <h3 className="font-semibold text-gray-500">Date</h3>
                <h3 className="font-bold">10 - 11 Aug 2024</h3>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Hourglass color="purple" />
              <div>
                <h3 className="text-gray-500 font-semibold">Time</h3>
                <h3 className="font-bold ">13.00 - 23.00</h3>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Calendar color="purple" />
              <div>
                <h3 className="text-gray-500 font-semibold">Location</h3>
                <h3 className="font-bold">Rembang</h3>
              </div>
            </div>

            <button className="btn btn-primary w-full text-white rounded-md">
              Buy ticket
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-lg md:mt-5">Description</h1>
      <p className="font-regular text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestias
        numquam commodi eos aliquam autem minima tempora laborum, velit vel quod
        quisquam eveniet ab alias accusamus illo blanditiis iusto culpa.
      </p>
    </div>
  );
};

export default EventDetail;

// <div className="w-full my-3">
//   <div className="md:max-w-[85%] mx-auto">
//     <h1 className="badge badge-lg badge-primary text-white text-sm p-4">
//       Music
//     </h1>

//     {/* title, image, detail  */}
//     <h1>Baku Hantam Jogja</h1>
//     <div className="mt-3 flex">
//       <img src="/evt.jpg" className="w-[70%] h-[300px]" />

//       <div className="px-[5%] w-[500px]">
//         <h1 className="font-bold">Detail Event</h1>
//         <div className="flex items-center h-[100px] gap-3">
//           <Calendar />
//           <div className="">
//             <h4>Date</h4>
//             <h3 className="font-bold">10 May 2024</h3>
//           </div>
//         </div>

//         <div className="flex items-center h-[100px] gap-3">
//           <Hourglass />
//           <div className="">
//             <h4>Time</h4>
//             <h3 className="font-bold">20:00 - 22:00</h3>
//           </div>
//         </div>

//         <div className="flex items-center h-[100px] gap-3">
//           <Locate />
//           <div className="">
//             <h4>Location</h4>
//             <h3 className="font-bold">Surabaya</h3>
//           </div>
//         </div>
//         <button className="btn btb-primary btn-md ">Buy ticket</button>
//       </div>
//     </div>
//     {/* end title, image, detail  */}
//     <h1>Penyelenggara</h1>
//     <h1>Jogja Event Community</h1>
//   </div>
// </div>
