"use client";
import Link from "next/link";
import { useCheckUrls } from "@component/src/hooks";

const ItemMenu = ({ navbarItem }: { navbarItem: string }) => {
  const isSameUrl = useCheckUrls(navbarItem);
  console.log(isSameUrl);

  return (
    <h4
      data-url={isSameUrl}
      className="capitalize text-gray-400 data-[url]:text-black"
    >
      <Link href={"/" + navbarItem}>{navbarItem}</Link>
    </h4>
  );
};

export default ItemMenu;
