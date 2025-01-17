import Account from "./Account";
import LogoEAfkham from "./Logo";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <div className="w-full lg:py-4 lg:h-[88px]">
      <div className="container mx-auto flex font-lexend-exa lg:gap-[40px] items-center">
        <LogoEAfkham />
        <SearchBar />
        <Menu />
        <Account />
      </div>
    </div>
  );
};

export default Navigation;
