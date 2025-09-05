import Navbar from "../components/Navbar";
import StatusOnline from "../components/StatusOnline";
import Title from "../components/Title";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import MySocialMedia from "../components/MySocialMedia";
import MediaSocialScroll from "../components/MediaSocialScroll";

export default function Beranda() {
  return (
    <main className="Home min-h-screen w-full bg-[#141414]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-[121px] py-[34px]">
        <div className="Status flex justify-start w-full">
          <StatusOnline />
        </div>
        
        <div className="TitleSection flex justify-start w-full mt-[32px] min-h-[300px]">
          <Title />
        </div>
        
        <div className="ButtonAndSocial flex flex-row items-center w-full justify-between mt-[12px]">
          <div className="ButtonGroup flex flex-row justify-start items-center gap-[32px]">
            <ButtonPrimary />
            <ButtonSecondary />
          </div>
          <div className="SocialMedia">
            <MySocialMedia />
          </div>
        </div>
        
        <div className="ScrollingMedia mt-[64px]">
          <MediaSocialScroll />
        </div>
      </section>

      {/* About Section (Target Scroll) */}
    </main>
  );
}
