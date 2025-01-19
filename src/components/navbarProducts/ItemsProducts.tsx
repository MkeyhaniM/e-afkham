import React from "react";

const ItemsProducts = ({ item }) => {
  return (
    <div className="cursor-pointer flex gap-4 items-center hover:text-red-600 text-white text-base ttt">
      {item.icon}
      {item.name}
    </div>
  );
};

export default ItemsProducts;
