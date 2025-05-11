import {createClient} from "@/src/utils/supabase/client";
import Offprice from "@component/src/types/OffPrice";
import Image from "next/image";
import Button from "../Button";
import {Favourite} from "@component/src/icons";
import AddFavourite from "./AddFavourite";

interface Props {
  itemOffPrice: Offprice;
}

const ItemPrice = async ({itemOffPrice}: Props) => {
  if (!itemOffPrice?.id) {
    console.error("Invalid itemOffPrice ID:", itemOffPrice);
    return null;
  }

  const supabase = await createClient();

  const {data, error} = await supabase
    .from("products")
    .select("*")
    .eq("product_id", itemOffPrice.id)
    .single();

  if (error) {
    console.error("Supabase query error:", error);
    return null;
  }

  return (
    <div className="rounded-xl bg-[#F6F6F6] py-5 px-6 flex flex-col items-center justify-evenly gap-2 w-[340px] overflow-hidden font-bold">
      <AddFavourite product_id={data.product_id} />
      <Image
        src={data.image_url}
        width={200}
        height={300}
        alt="can not upload the picture"
        className="w-[220px] h-[250px] object-contain"
      />
      <div>{data?.title}</div>
      <h4>${data.price}</h4>
      <Button
        name={"Buy Now"}
        style="bg-black text-white px-9 py-2 rounded-md hover:bg-gray-800 transition duration-200 font-medium"
      />
    </div>
  );
};

export default ItemPrice;
