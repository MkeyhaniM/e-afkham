import Image from "next/image";
import Button from "../Button";
import * as motion from "motion/react-client";

interface Props {
  title: string;
  description: string;
  detail: Detail;
  image_url: string;
  id: number;
}

interface Detail {
  style: string;
  link: string;
}

const ItemSlide = ({title, description, detail, image_url, id}: Props) => {
  const modifySize = id == 7 ? true : false;

  return (
    <div className={`${detail.style} w-1/4 border-none py-8`}>
      <motion.div
        layout
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="flex flex-col justify-around items-center"
        transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
      >
        <Image
          data-modify={modifySize}
          className="h-[450px] data-[modify=true]:py-10"
          src={image_url}
          alt={title}
          width={450}
          height={450}
        />
        <div className="flex flex-col gap-3 font-exo2 px-10 font-light">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-[#656161]">{description}</p>
          <Button
            name={"Shop Now"}
            style={`${detail.style} w-[150px] rounded-lg py-2 hover:scale-95 transition-all duration-300 ease-in-out`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ItemSlide;
