import Image from "next/image";
import Button from "../Button";

const IntroductionProducts = () => {
  return (
    <div className="w-full h-[600px] flex">
      <div className="w-1/2">
        <div></div>
        <div>
          <div className="flex items-center">
            <Image
              src={"/assets/images/PlayStation.png"}
              alt="can not upload"
              width={350}
              height={443}
            />
            <div className="flex flex-col gap-5">
              <h3 className="text-5xl font-bold">Playstation 5</h3>
              <p className="pr-[180px] text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="flex w-1/2 bg-customWhite200 items-center
            "
            >
              <Image
                src={"/assets/images/headphone.png"}
                alt="can not upload"
                width={130}
                height={200}
              />
              <div
                className="px-14 flex flex-col gap-4
              "
              >
                <h3 className="text-4xl">
                  Apple <br /> AirPods
                  <span
                    className="font-bold px-3
                  "
                  >
                    Max
                  </span>
                </h3>
                <p className="text-[#909090]">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 items-center bg-custom
            "
            >
              <Image
                src={"/assets/images/visionPro.png"}
                alt="can not upload"
                width={150}
                height={130}
              />
              <div className="px-6 flex-1 flex flex-col gap-4">
                <h1 className="text-4xl text-white">
                  Apple <br /> Vision
                  <span className="font-bold px-3">Pro</span>
                </h1>
                <p className="text-[#909090] pr-20">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-customWhite200 flex justify-between items-center">
        <div
          className="flex flex-col flex-1 px-16 gap-6

        "
        >
          <h2 className="text-7xl font-thin">
            Macbook <span className="font-bold">Air</span>
          </h2>
          <p className="pr-24 text-[#909090]">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Button
            name={"Shop Now"}
            style="p-4 rounded text-black border w-[200px] hover:bg-[#211C24] hover:text-[#EDEDED] border-2 border-black transition-all duration-200"
          />
        </div>
        <Image
          src={"/assets/images/MacBook Pro.png"}
          alt="can not upload the picture"
          width={300}
          height={500}
        />
      </div>
    </div>
  );
};

export default IntroductionProducts;
