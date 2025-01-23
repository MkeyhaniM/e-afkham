import { navbarProducts } from "@component/src/constants";
import ItemsCategory from "./ItemsCategory";
import categoryList from "@component/src/constants/CategoryList";

const Category = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-32 flex gap-5 flex-col">
        <h3 className="text-2xl">Browse By Category</h3>
        <div className="flex gap-8 items-center justify-center">
          {categoryList.map((items) => (
            <ItemsCategory key={items.name} item={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
