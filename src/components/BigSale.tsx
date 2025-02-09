import Laptop from "@/public/assets/images/Laptop_BigSummer.png";
import Iphone from "@/public/assets/images/Iphone_BigSummer.png";
import SmartWatch from "@/public/assets/images/SmartWatch_BigSummer.png";
import Table1 from "@/public/assets/images/tablet_BigSummer.png";
import Table2 from "@/public/assets/images/tablet2_BigSummer.png";
import Image from "next/image";
import Button from "./Button";

const BigSale = () => {
  return (
    <div className="w-full h-[448px] bg-gradient-to-r from-[#2E2E2E] to-[#000000] relative overflow-hidden ">
      <div>
        <Image
          src={Laptop.src}
          width={200}
          height={131}
          alt={"cannot upload the picture"}
          className="absolute left-56 -top-20 rotate-12"
        />
        <Image
          src={Table2.src}
          width={237}
          height={192}
          alt={"cannot upload the picture"}
          className="absolute left-10 top-10"
        />
        <Image
          src={Table1.src}
          width={418.56}
          height={262.08}
          alt={"cannot upload the picture"}
          className="transform absolute top-48 -left-8"
        />
      </div>
      <div>
        <Image
          src={Iphone.src}
          width={140}
          height={131}
          alt={"cannot upload the picture"}
          className="absolute -right-5 -top-4 rotate-[320deg]"
        />
        <Image
          src={SmartWatch.src}
          width={320}
          height={131}
          alt={"cannot upload the picture"}
          className="absolute right-0 -bottom-20"
        />
      </div>
      <div className="flex justify-center items-center py-36 text-center">
        <div className="text-white flex flex-col gap-6 items-center">
          <h3 className="font-thin text-6xl">
            Big Summer <span className="font-bold">Sale</span>
          </h3>
          <p className="text-[#787878]">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
          <Button
            name={"Shop Now"}
            style="p-4 rounded text-white border w-[200px] border border-white transition-all duration-200 hover:scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default BigSale;
