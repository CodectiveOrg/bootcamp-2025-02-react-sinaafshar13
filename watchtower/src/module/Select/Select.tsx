import { ComponentProps, ReactNode } from "react";

import styles from "./Select.module.css";

import { SelectOption } from "../../types/select-option";

import clsx from "clsx";

type Variant = "solid" | "outlined";

type Props = ComponentProps<"select"> & {
  variant?: Variant;
  options: SelectOption[];  
};

const Select = ({ variant = "solid", options , ...otherProps }: Props): ReactNode => {
  return (
    <div className={clsx(styles.select, styles[variant])}>
      <select {...otherProps} name="category" id="category">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
