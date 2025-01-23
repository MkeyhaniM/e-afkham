import {
  CamerasDark,
  ComputerDark,
  GamingDark,
  HeadPhoneDark,
  IphoneDark,
  SmartWatchDark,
} from "../icons";
import { NavbarProduct } from "../types";

const categoryList: NavbarProduct[] = [
  {
    name: "Phones",
    href: "/",
    icon: <IphoneDark />,
  },
  {
    name: "Computers",
    href: "/",
    icon: <ComputerDark />,
  },
  {
    name: "Smart Watches",
    href: "/",
    icon: <SmartWatchDark />,
  },
  {
    name: "Cameras ",
    href: "/",
    icon: <CamerasDark />,
  },
  {
    name: "Headphones",
    href: "/",
    icon: <HeadPhoneDark />,
  },
  {
    name: "Gaming",
    href: "/",
    icon: <GamingDark />,
  },
];

export default categoryList;
