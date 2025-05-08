import {createClient} from "@/src/utils/supabase/server";
import Offprice from "@component/src/types/OffPrice";
import Image from "next/image";
import Button from "../Button";

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

  console.log(data);

  console.log("Product data:", data);

  return (
    <div className="rounded-xl bg-[#F6F6F6] p-5 flex flex-col items-center justify-evenly gap-3 w-[320px] h-[460px]">
      <span className="self-end">add to</span>
      <Image
        src={data.image_url}
        width={200}
        height={300}
        alt="can not upload the picture"
        className="w-[220px] h-[280px] "
      />
      <div>{data?.title}</div>
      <h4>${data.price}</h4>
      <Button
        name={"Buy Now"}
        style="bg-black text-white px-9 py-3 rounded-md hover:bg-gray-800 transition duration-200 "
      />
    </div>
  );
};

export default ItemPrice;
