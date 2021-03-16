import { Icon } from "./Icon";

import "../styles/button.scss";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ iconName, title, selected, ...rest }: ButtonProps) => (
  <button type="button" {...(selected && { className: "selected" })} {...rest}>
    <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
    {title}
  </button>
);
