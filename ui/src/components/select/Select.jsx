import React from "react";

export const Select = React.forwardRef(({ options = [], ...props }, ref) => {
  return (
    <Select
      ref={ref}
      className="appearance-none bg-[url('assets/icons/arrow.svg')] bg-[length:16px_10px] bg-no-repeat bg-[center_right_1rem]  leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full 
          focus:border-blue-dfx focus:shadow-input focus:shadow-blue-dfx"
      {...props}
    >
      {options.map(({ label, value }, i) => (
        <option value={value} key={`${value}_${i}`}>
          {label}
        </option>
      ))}
    </Select>
  );
});
