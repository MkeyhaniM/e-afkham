import { ButtonTypes } from "../types";

const Button = ({ name, style }: ButtonTypes) => {
  return (
    <button className={style}>
      {typeof name === "function" ? name() : name}
    </button>
  );
};

export default Button;
