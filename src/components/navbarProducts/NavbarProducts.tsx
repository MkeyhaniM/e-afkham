import { navbarProducts } from "@component/src/constants";
import ItemsProducts from "./ItemsProducts";
import { NavbarProduct } from "@component/src/types";

const NavbarProducts = () => {
  return (
    <div className="bg-[#2E2E2E] py-3">
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center font-exo2">
          {navbarProducts.map((item: NavbarProduct, index) => (
            <ItemsProducts item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarProducts;
