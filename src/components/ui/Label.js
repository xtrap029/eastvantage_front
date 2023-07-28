import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const labelVariants = cva(
  "block text-sm font-bold mb-2",
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

const Label = ({ className, variant, size, ...props }) => {
  return (
    <div
      className={cn(labelVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Label;
