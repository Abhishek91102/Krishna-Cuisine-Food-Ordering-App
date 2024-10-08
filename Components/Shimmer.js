import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Shimmer = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-full min-h-screen">
        {/* Restaurant details */}
        <div className="w-[60%] mx-auto font-Arvo mt-[20px] flex justify-between items-baseline">
          <div>
            <h2 className="font-bold text-[22px] mb-[15px]"><Skeleton width={200} /></h2>
            <h5 className="font-normal text-[#8d8d8d]"><Skeleton width={150} /></h5>
            <h5 className="font-normal text-[#8d8d8d]"><Skeleton width={100} /></h5>
            <h5 className="font-normal text-[#8d8d8d]"><Skeleton width={100} /></h5>
          </div>
          <div className="flex flex-col shadow-md">
            <span className="star-rating text-center border-[1px] border-[#d0d0d0] py-[5px] px-[2px] text-green-800">
              <i className="fa fa-star"></i>
              <Skeleton circle={true} height={20} width={20} />
            </span>
            <span className="review-count text-center border-[1px] border-[#d0d0d0] py-[5px] px-[2px] text-[#8d8d8d] font-[13px]">
              <Skeleton width={50} />
            </span>
          </div>
        </div>

        <hr className="w-[60%] mx-auto my-2 border-gray-600" />

        {/* Offers area */}
        <div className="w-[60%] mx-auto font-Arvo flex items-center overflow-x-auto whitespace-nowrap scrollbar-none">
          {/* Repeat this div for each offer */}
          <div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton width={100} /></h5>
            <span className="font-[12px] text-[#8d8d8d]"><Skeleton width={150} /></span>
          </div>
        </div>

        {/* Veg/non veg declaration */}
        <div className="w-[60%] mx-auto font-Arvo">
          <h4 className="mt-[20px] mb-[10px] font-[600] text-[18px]">
            <i className="fa fa-leaf text-green-800"></i>
            <Skeleton width={150} />
          </h4>
        </div>

        <hr className="w-[60%] mx-auto border-gray-600" />

        {/* Menu items with categories */}
        <div className="w-[60%] mx-auto my-1">
          {/* Repeat this div for each category */}
          <div className="font-semibold text-[18px] mt-[15px]"><Skeleton width={150} /></div>
          {/* Repeat this div for each item in category */}
          <div className="flex justify-between items-center py-[10px] border-b border-gray-300">
            <div>
              <h5 className="font-semibold"><Skeleton width={150} /></h5>
              <span className="font-[14px] text-[#8d8d8d]"><Skeleton width={100} /></span>
            </div>
            <div>
              <span className="font-[16px]"><Skeleton width={50} /></span>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Shimmer;