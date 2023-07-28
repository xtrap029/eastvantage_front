import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const selectVariants = cva(
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

const Select = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(selectVariants({ variant, size, className }))}
      {...props}
    />
  );
});

export default Select;
