import {
  Phone,
  Headphone,
  SmartWatch,
  Computer,
  Gaming,
  Cameras,
} from "../icons";
import { NavbarProduct } from "../types";

const navbarProducts: NavbarProduct[] = [
  {
    name: "Phones",
    href: "/",
    icon: <Phone />,
  },
  {
    name: "Computers",
    href: "/",
    icon: <Computer />,
  },
  {
    name: "Smart Watches",
    href: "/",
    icon: <SmartWatch />,
  },
  {
    name: "Cameras ",
    href: "/",
    icon: <Cameras />,
  },
  {
    name: "Headphones",
    href: "/",
    icon: <Headphone />,
  },
  {
    name: "Gaming",
    href: "/",
    icon: <Gaming />,
  },
];

export default navbarProducts;
