import { Search } from "@component/src/icons";

const SearchBar = () => {
  return (
    <div className="flex">
      <div className="bg-[#F5F5F5]  flex lg:h-[50px] gap-3 rounded-lg justify-center items-center p-4">
        <span>
          <Search />
        </span>
        <input
          type="text"
          className="outline-none rounded-r-lg w-[400px] bg-[#F5F5F5]"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
