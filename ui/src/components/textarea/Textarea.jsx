import React from "react";

export const Textarea = React.forwardRef((props, ref) => {
  return (
    <textarea
      rows="3"
      ref={ref}
      className="leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full focus:shadow-input focus:shadow-blue-dfx "
      {...props}
    />
  );
});
