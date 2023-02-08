const Timeline = () => {
  return (
    <ul className="steps w-full  mx-auto z-30 sticky bottom-10">
      <li className="step step-info ">Fly to moon</li>
      <li className="step step-info ">Shrink the moon</li>
      <li className="step step-info ">Grab the moon</li>
      <li className="step step-error" data-content="?">
        Sit on toilet
      </li>
    </ul>
  );
  // return (
  //   <div className="w-8/12 mx-auto z-30 sticky bottom-20 ">
  //     <div className="bg-gray-600 h-1 flex items-center justify-between">
  //       <div className="w-1/3 flex justify-between bg-sky-700 h-1 items-center relative">
  //         <div className="bg-amber-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
  //           3
  //         </div>
  //         <div className="bg-rose-300  h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
  //           4
  //         </div>
  //         <div className="absolute left-[-16px]">
  //           <div className="relative bg-green-200 shadow-lg px-2 py-1 rounded mt-16 -mr-7">
  //             <p
  //               tabindex="0"
  //               className="focus:outline-none text-indigo-700  text-xs font-bold"
  //             >
  //               2023
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-1/3 flex justify-center">
  //         <div className="bg-gray-200  h-6 w-6 rounded-full shadow flex items-center justify-center">
  //           5
  //         </div>
  //       </div>
  //       <div className="w-1/3 flex justify-between bg-sky-700 h-1 items-center relative">
  //         <div className="bg-amber-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
  //           3
  //         </div>
  //         <div className="bg-rose-300  h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
  //           4
  //         </div>
  //         <div className="absolute left-[-16px]">
  //           <div className="relative bg-green-200 shadow-lg px-2 py-1 rounded mt-16 -mr-7">
  //             <p
  //               tabindex="0"
  //               className="focus:outline-none text-indigo-700  text-xs font-bold"
  //             >
  //               2023
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-1/3 flex justify-center">
  //         <div className="bg-gray-200  h-6 w-6 rounded-full shadow flex items-center justify-center">
  //           5
  //         </div>
  //       </div>
  //       <div className="w-1/3 flex justify-end bg-sky-700 h-1 items-center relative">
  //         <div className="bg-rose-300  h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
  //           4
  //         </div>
  //         <div className="absolute right-0">
  //           <div className="relative bg-green-200 shadow-lg px-2 py-1 rounded mt-16 -mr-7">
  //             <p
  //               tabindex="0"
  //               className="focus:outline-none text-indigo-700  text-xs font-bold"
  //             >
  //               2024
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default Timeline;
