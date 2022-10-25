import React from "react";

export const Loading = () => {
    return (
        <div className="h-full w-full flex relative items-center justify-center ">
            <div className="bg-loading-icon w-[72px] h-[72px] bg-[length:72px_72px]"></div>
            <div className="absolute grid bottom-0 items-center flex justify-center">
                <div className=" text-[14px] text-gray-500 text-center">from</div>
                <div className="bottom-0 bg-loading-meta bg-[length:96px_36px] mb-[20px] w-[96px] h-[36px] " ></div>
            </div>
        </div>
    )
}