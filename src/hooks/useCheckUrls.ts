import { usePathname } from "next/navigation";

const useCheckUrls = (segment: string) => {
  const pathname = usePathname();

  if (pathname === segment) {
    return true;
  }

  return false;
};

export default useCheckUrls;
