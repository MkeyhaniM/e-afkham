"use client";
import useStore from "@component/src/store/useStore";
import Button from "../Button";
import { FavoriteList, Shopping, UserAccount } from "@component/src/icons";
import Link from "next/link";

const Account = () => {
  const { isLogin } = useStore();

  return (
    <div>
      {!isLogin ? (
        <>
          <Button
            name={"Login"}
            style="bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800"
          />
        </>
      ) : (
        <div className="flex gap-5">
          <Link href={"/test"}>
            <FavoriteList />
          </Link>
          <Link href={"/test"}>
            <Button name={Shopping} style="" />
          </Link>
          <Link href={"/test"}>
            <Button name={UserAccount} style="" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Account;
