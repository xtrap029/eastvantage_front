import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const alertVariants = cva("p-2 w-full text-center rounded", {
  variants: {
    variant: {
      default: "bg-teal-900 text-teal-100",
      error: "bg-red-950 text-red-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Alert = ({ className, variant, ...props }) => {
  return (
    <div
      className={cn(alertVariants({ variant, className }))}
      role="alert"
      {...props}
    />
  );
};

export default Alert;
