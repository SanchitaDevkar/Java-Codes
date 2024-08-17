import type { NextPage } from "next";

export type ProfileContentType = {
  className?: string;
};

const ProfileContent: NextPage<ProfileContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-[15px] pr-3.5 box-border max-w-full text-left text-mini text-black font-montserrat ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pl-px pr-0 box-border gap-[54px] max-w-full mq399:gap-[27px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20.4px] min-w-[172px]">
          <div className="w-[39.7px] relative font-semibold inline-block z-[1]">
            9:41
          </div>
          <div className="w-40 flex flex-row items-start justify-start pt-0 px-px pb-[4.6px] box-border text-5xl text-darkslategray">
            <h2 className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-[inherit] z-[1]">
              Home
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-7 pr-0 text-base">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.5px]">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <div className="h-[91px] w-[93px] absolute !m-[0] bottom-[-64px] left-[-26px] rounded-[50%] bg-gainsboro z-[2]" />
                <div className="h-[95px] w-[95px] absolute !m-[0] bottom-[-66px] left-[-27px] rounded-[50%] bg-gray-200 z-[3]" />
                <div className="flex-1 flex flex-row items-start justify-end">
                  <div className="w-[146px] relative leading-[23px] inline-block shrink-0 z-[1]">
                    Ajay ,21
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
                <div className="w-[146px] relative leading-[23px] font-semibold inline-block shrink-0 z-[1]">
                  UI/UX designer
                </div>
              </div>
              <div className="w-[215px] flex flex-row items-end justify-between py-0 pl-0 pr-5 box-border gap-5 text-xs text-white">
                <div className="w-[45px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
                  <div className="self-stretch rounded-3xs bg-gray-200 border-white border-[1px] border-solid flex flex-row items-start justify-start py-0.5 px-[9px] z-[4]">
                    <div className="relative leading-[100%] font-medium inline-block min-w-[25px]">
                      77%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px] text-sm text-gray-300">
                  <div className="w-[94px] flex flex-row items-start justify-start gap-[3px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-[13px] h-[13px] relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/carbonlocation.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[20px] font-medium z-[1]">
                      Pune
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-2 px-2.5 bg-royalblue-100 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dodgerblue">
                    <div className="relative text-3xs leading-[140%] font-medium font-montserrat text-white text-left inline-block min-w-[85px]">
                      Complete profile
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-1.5">
            <div className="h-[13.2px] w-[44.9px] relative">
              <img
                className="absolute top-[0px] left-[26.5px] w-[18.4px] h-[13.2px] z-[1]"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="absolute top-[0.4px] left-[0px] w-[20.4px] h-[12.8px] z-[1]"
                loading="lazy"
                alt=""
                src="/cellular-connection.svg"
              />
            </div>
            <img
              className="self-stretch w-[29.2px] relative max-h-full min-h-[14px] z-[1]"
              loading="lazy"
              alt=""
              src="/battery.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
