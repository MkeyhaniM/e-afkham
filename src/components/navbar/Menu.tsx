import { navbarMenuList } from "@component/src/constants";
import ItemMenu from "./ItemMenu";

const Menu = () => {
  return (
    <div>
      <nav className="flex gap-5">
        {navbarMenuList.map((navbarItem: string, index: number) => (
          <ItemMenu navbarItem={navbarItem} key={index} />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
