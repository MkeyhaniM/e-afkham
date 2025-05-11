"use client";

import {Favourite} from "@component/src/icons";

const AddFavourite = ({product_id}: {product_id: string | any}) => {
  const addRemoveFromFavouriteList = (product_id: string) => {
    console.log(product_id);
  };

  return (
    <span
      className="self-end cursor-pointer"
      onClick={() => addRemoveFromFavouriteList(product_id)}
    >
      <Favourite isFavourite={false} />
    </span>
  );
};

export default AddFavourite;
