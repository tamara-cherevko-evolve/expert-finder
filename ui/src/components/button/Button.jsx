import { twMerge } from "tailwind-merge";
import { Loading } from "../loading/Loading";
import styles from "./Button.module.css";

export const Button = ({
  children,
  className = "",
  isLoading,
  isDisabled = false,
  full = false,
  variant = "primary",
  onClick = () => {
    console.info("clicked");
  },
  ...rest
}) => {
  const classes = twMerge(
    `inline-flex
      ${
        isLoading
          ? "cursor-wait"
          : isDisabled
          ? "cursor-not-allowed"
          : "cursor-pointer"
      }
      ${styles.btn}
      ${styles["btn-" + variant]}
      ${full && "w-full"}
      ${className}
      `
  );

  return (
    <button
      disabled={isDisabled}
      onClick={(event) => {
        if (isLoading || isDisabled) {
          event.preventDefault();
        } else {
          onClick?.(event);
        }
      }}
      className={classes}
      {...rest}
    >
      <span>{children}</span>
      {isLoading && (
        <Loading
          size="1.5rem"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </button>
  );
};
