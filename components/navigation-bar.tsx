import type { NextPage } from "next";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: NextPage<NavigationBarType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[15px] pb-1 box-border max-w-full text-left text-xs text-black font-montserrat ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-2 max-w-full">
        <div className="flex-1 rounded-mini border-gray-100 border-[0.3px] border-solid box-border flex flex-row items-start justify-start py-[11px] px-[26px] gap-2.5 min-w-[129px] z-[1]">
          <img
            className="h-[43px] w-[43px] relative"
            loading="lazy"
            alt=""
            src="/lighting.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
            <div className="relative leading-[140%] font-medium">
              <p className="m-0">Quick Connect</p>
              <p className="m-0 text-dimgray">from 49.00 INR</p>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-mini border-gray-100 border-[0.3px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-[27px] gap-[10.1px] min-w-[125px] z-[1]">
          <img
            className="h-[35px] w-[35.9px] relative min-h-[35px]"
            loading="lazy"
            alt=""
            src="/group-1321315405.svg"
          />
          <div className="relative leading-[140%] font-medium">
            <p className="m-0">Swift Message</p>
            <p className="m-0 text-dimgray">from 49.00 INR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
