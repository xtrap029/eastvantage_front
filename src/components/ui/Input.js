import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "bg-stone-800 border border-zinc-700 rounded-lg block w-full p-3",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  );
});

export default Input;
