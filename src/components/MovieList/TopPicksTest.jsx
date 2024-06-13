import { useState } from "react";

const TopPicksTest = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);



  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}

      className={`absolute -mr-[66px] flex flex-row -z-40 ${
        isHovered ? "hovered" : ""
      }`}
    >
      <img
        alt=""
        src="https://occ-0-3769-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUk8ZPXSYS9Paj-VDWBbvauCwAIpNJre8fPLjWPEhQ7mLVxj1zcqo8Gg-k3lQTgMKZHBgxsbrQhyvDzhbJ0xwX-7GRPtMzpe-QB9FFGthRwMSZjakQ-_cleRLaAl6hGbPsYu14c0HtkpsFC78MZEFXftHtpYsV_g0EhEBoVeRwbMLnCtaSkacbPc9X52RdulBTos2zske9-9q6LQmJDh6cxMCMxqOdtH-T7CkjqbAOFmTiAdPTKO5ehQGAtnreZ_G3YCJUPm5jfLM7g7E6Q41IlZW673Qtp8d8aj3nUI37XVGGfR3ar885cMJjNRxAtpwCoH2zs9xikLot_pIfHaSe-3u49jWdhhGzSGPN9nIv9WRn8udoc.jpg?r=4f8"
        className="w-[77%] rounded-[4px] hover:cursor-pointer -z-30"
      />

      {isHovered && (
        <div
          className="absolute inset-0 bg-[#141414] text-white flex flex-col justify-center items-center transition-transform z-[99] w-[200px] h-[100px] rounded-lg ease-in-out duration-300 transform cursor-pointer delay-100 top-24 -left-14"
        >
          <h3 className="text-2xl font-semibold">Movie Title</h3>
          <p className="text-sm">Movie Title</p>
        </div>
      )}
    </div>
  );
};

export default TopPicksTest;
