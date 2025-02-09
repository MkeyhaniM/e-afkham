import {createClient} from "@/src/utils/supabase/server";

const ItemPrice = async ({itemOffPrice}) => {
  const supabase = await createClient();

  const forginId = await supabase.from("sliders").select("*").eq("id", itemOffPrice.id).single();

  return <div>ItemPrice</div>;
};

export default ItemPrice;
