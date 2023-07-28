import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "font-semibold inline-block last:mr-0 mr-1",
  {
    variants: {
      variant: {
        default: "text-gray-300 bg-stone-900",
      },
      size: {
        default: "py-1 px-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Badge = ({ className, variant, size, ...props }) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Badge;
