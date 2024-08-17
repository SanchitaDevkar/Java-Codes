import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type FooterMenuType = {
  className?: string;
};

const FooterMenu: NextPage<FooterMenuType> = ({ className = "" }) => {
  const router = useRouter();

  const onMenu1ContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <footer
      className={`self-stretch shadow-[0px_4px_50px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start max-w-full z-[1] ${className}`}
    >
      <div className="flex-1 bg-white flex flex-row items-start justify-between py-4 pl-11 pr-[59px] box-border max-w-full gap-5 mq370:flex-wrap mq370:justify-center">
        <div
          className="flex flex-row items-start justify-start py-0 px-px cursor-pointer z-[1]"
          onClick={onMenu1ContainerClick}
        >
          <div className="h-12 w-12 rounded-81xl bg-light flex flex-row items-start justify-start p-3 box-border">
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={onMenu1ContainerClick}
            >
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/lihome.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[9px] pb-0 pl-0 pr-[13px]">
          <img
            className="w-7 h-7 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/person2.svg"
          />
        </div>
        <div className="w-[34px] flex flex-col items-start justify-start pt-3.5 pb-0 pl-0 pr-[13px] box-border">
          <img
            className="w-[20.1px] h-5 relative"
            loading="lazy"
            alt=""
            src="/group-1321315431.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-3.5">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
