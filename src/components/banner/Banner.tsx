"use client";
import Image from "next/image";
import Button from "../Button";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="bg-custom">
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", bounce: 0.25, visualDuration: 0.5 }}
        className=""
      >
        <div className="flex items-center justify-evenly pt-20">
          <div className="flex flex-col gap-4 items-start">
            <h4 className="text-2xl text-zinc-600">Pro.Beyond.</h4>
            <h1 className="text-8xl text-white font-thin">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <p className="text-zinc-600 font-bold">
              Created to change everything for the better. For everyone
            </p>
            <Button
              name={"Shop Now"}
              style="p-4 rounded text-white border w-[200px] hover:bg-white hover:text-[#211C24] transition-all duration-200"
            />
          </div>
          <Image
            src={"/assets/images/IphoneBanner.png"}
            alt="can not upload the picture"
            width={405}
            height={500}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
