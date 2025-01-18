import { JSX } from "react";

interface ButtonTypes {
  name: string | (() => JSX.Element);
  style: string;
}

export default ButtonTypes;
