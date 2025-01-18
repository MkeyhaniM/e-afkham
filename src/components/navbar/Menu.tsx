import { navbarMenuList } from "@component/src/constants";
import ItemMenu from "./ItemMenu";
import { NavbarList } from "@component/src/types";

const Menu = () => {
  return (
    <div>
      <nav className="flex gap-5">
        {navbarMenuList.map((navbarItem: NavbarList, index: number) => (
          <ItemMenu navbarItem={navbarItem} key={index} />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
