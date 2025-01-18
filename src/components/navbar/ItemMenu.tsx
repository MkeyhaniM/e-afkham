"use client";
import Link from "next/link";
import { NavbarList } from "@component/src/types";
import { useCheckUrls } from "@component/src/hooks";

const ItemMenu = ({ navbarItem }: { navbarItem: NavbarList }) => {
  const isSameUrl = useCheckUrls(navbarItem.href);

  return (
    <h4
      data-url={isSameUrl}
      className="capitalize text-gray-400 data-[url=true]:text-black"
    >
      <Link href={navbarItem.href}>{navbarItem.name}</Link>
    </h4>
  );
};

export default ItemMenu;
