import {createClient} from "@/src/utils/supabase/server";
import ItemPrice from "./ItemPrice";

const OffPrice = async () => {
  const supabase = await createClient();

  const {data, error} = await supabase.from("discount_products").select();

  if (error) {
    console.error("Supabase query error:", error);
    return null;
  }

  console.log("Discount products data:", data);

  //TODO: task

  return (
    <div className="container mx-auto flex justify-center items-center py-32 flex-col gap-8">
      <h3 className="text-2xl self-start">Discounts up to -50%</h3>
      <div className="flex gap-5 justify-center items-center ">
        {data &&
          data.map((item) => {
            return <ItemPrice itemOffPrice={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default OffPrice;
