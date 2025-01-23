import { NavbarProduct } from "@component/src/types";

interface Props {
  item: NavbarProduct;
}

const ItemsProducts = ({ item }: Props) => {
  return (
    <div className="cursor-pointer flex gap-4 items-center hover:text-red-600 text-white text-base ttt">
      <div className="w-6 h-6">{item.icon}</div>
      {item.name}
    </div>
  );
};

export default ItemsProducts;
