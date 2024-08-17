import type { NextPage } from "next";

export type BottomNavigationType = {
  className?: string;
};

const BottomNavigation: NextPage<BottomNavigationType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[15px] pb-[21px] box-border max-w-full text-center text-base text-white font-montserrat ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
        <div className="self-stretch rounded-mini bg-royalblue-200 flex flex-col items-start justify-start py-2.5 px-[59px] gap-2.5 z-[1] mq398:pl-5 mq398:pr-5 mq398:box-border">
          <div className="self-stretch h-[68px] relative leading-[140%] inline-block">
            <p className="[margin-block-start:0] [margin-block-end:6px] whitespace-pre-wrap">
              <b>{`Premium `}</b>
            </p>
            <p className="m-0 text-sm font-medium text-gray-400 whitespace-pre-wrap">
              Unlock advance feature of Brainchain to enhance your experience
            </p>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-10 pr-[41px] text-xs">
            <div className="rounded-xl bg-gray-500 flex flex-row items-start justify-start py-[12.5px] px-[21px] whitespace-nowrap">
              <div className="relative leading-[17px] font-medium">
                Upgrade from 999.00 INR
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-left text-sm text-gray-700">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-5 w-2.5 absolute !m-[0] top-[69px] right-[23px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-5 w-2.5 absolute !m-[0] top-[135px] right-[23px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-5 w-2.5 absolute !m-[0] right-[23px] bottom-[129px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-5 w-2.5 absolute !m-[0] right-[23px] bottom-[63px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
              <div className="w-[370px] flex flex-row items-start justify-start pt-0 px-2 pb-[9px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
                  <div className="w-[221px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[100%] font-medium z-[1]">
                      My Profile
                    </div>
                  </div>
                  <img
                    className="self-stretch w-2.5 relative max-h-full object-contain min-h-[20px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-600 border-t-[1px] border-solid box-border z-[1]" />
              <div className="w-[237px] flex flex-row items-start justify-start pt-0 px-2 pb-[9px] box-border">
                <div className="flex-1 relative leading-[100%] font-medium z-[1]">
                  Psychometric assessment
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-600 border-t-[1px] border-solid box-border z-[1]" />
              <div className="w-[237px] flex flex-row items-start justify-start pt-0 px-2 pb-[9px] box-border">
                <div className="flex-1 relative leading-[100%] font-medium z-[1]">
                  Level configuration
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-600 border-t-[1px] border-solid box-border z-[1]" />
              <div className="w-[237px] flex flex-row items-start justify-start pt-0 px-2 pb-[9px] box-border">
                <div className="flex-1 relative leading-[100%] font-medium z-[1]">
                  Notifications
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-600 border-t-[1px] border-solid box-border z-[1]" />
              <div className="w-[237px] flex flex-row items-start justify-start pt-0 px-2 pb-[9px] box-border">
                <div className="flex-1 relative leading-[100%] font-medium z-[1]">
                  General settings
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray-600 border-t-[1px] border-solid box-border z-[1]" />
              <div className="w-[237px] flex flex-row items-start justify-start py-0 px-2 box-border">
                <div className="flex-1 relative leading-[100%] font-medium z-[1]">
                  Logout
                </div>
              </div>
            </div>
            <img
              className="h-5 w-2.5 absolute !m-[0] right-[23px] bottom-[-3px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
