import { NavbarProduct } from "@component/src/types";
import React from "react";

interface Props {
  item: NavbarProduct;
}
const ItemsCategory = ({ item }: Props) => {
  return (
    <div className="bg-[#EDEDED] rounded-lg h-[130px] w-[160px] flex items-center flex-col gap-2 cursor-pointer justify-center hover:shadow-lg transition-all duration-300">
      {item.icon}
      {item.name}
    </div>
  );
};

export default ItemsCategory;
