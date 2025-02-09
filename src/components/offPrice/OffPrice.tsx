import {createClient} from "@/src/utils/supabase/server";
import ItemPrice from "./ItemPrice";

const OffPrice = async () => {
  const supabase = await createClient();

  const {data, error} = await supabase.from("discount_products").select();
  console.log(data);

  return (
    <div>
      {data &&
        data.map((item) => {
          return <ItemPrice itemOffPrice={item} key={item.id} />;
        })}
    </div>
  );
};

export default OffPrice;
