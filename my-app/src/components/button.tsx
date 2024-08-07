/*import React from "react";

const Button: React.FC<{
  size: "small" | "medium" | "large";
  type: "primary" | "secondary" | "text";
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}> = ({ size, type, leftIcon, rightIcon, label }) => {
  const classType = React.useMemo(() => {
    switch (type) {
      case "primary":
        return "bg-secondary-50  hover:bg-secondary-200 hover:border-secondary-200 active:bg-secondary-300 active-border-secondary-300";
      case "secondary":
        return "bg-primary-300  hover:bg-primary-200 active:bg-primary-50 boeder-white";
      case "text":
        return "bg-transparent border-transparent text-white hover:text-neutral-800";
    }
  }, [type]);

  const classSize = React.useMemo(() => {
    switch (size) {
      case "small":
        return "py-1 px-6";
      case "medium":
        return "py-2.5 px-8";
      case "large":
        return "py-3 px-12";
    }
  }, [size]);

  return (
    <button className={`${classType} border border-solid rounded-full text-white font-poppins text-base transition duration-300 ${classSize}  `}>
    {label}
    </button>
  );
};

export default Button;*/
