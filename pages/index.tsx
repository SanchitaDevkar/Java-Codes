import type { NextPage } from "next";
import ProfileContent from "../components/profile-content";
import NavigationBar from "../components/navigation-bar";
import BottomNavigation from "../components/bottom-navigation";
import FooterMenu from "../components/footer-menu";

const Home: NextPage = () => {
  return (
    <div className="w-full relative rounded-[25px] bg-white overflow-hidden flex flex-col items-end justify-start pt-5 px-0 pb-0 box-border gap-2 leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] right-[0px] bottom-[-9px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="w-[88px] h-[90px] relative rounded-[226px] bg-bgcolor-lightprimary overflow-hidden shrink-0 hidden z-[1]">
        <img
          className="absolute h-[82.44%] w-[85.91%] top-[17.56%] right-[14.09%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/replace-here@2x.png"
        />
        <div className="absolute h-[18.78%] w-2/5 top-[134.11%] right-[20%] bottom-[-52.89%] left-[40%] bg-gray-200" />
      </div>
      <ProfileContent />
      <NavigationBar />
      <BottomNavigation />
      <FooterMenu />
    </div>
  );
};

export default Home;
