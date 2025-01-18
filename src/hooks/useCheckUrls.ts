import { usePathname } from "next/navigation";

const useCheckUrls = (segment: string) => {
  const params = usePathname();

  if (params === "/" + segment || params === "/") {
    return true;
  }

  return false;
};

export default useCheckUrls;
