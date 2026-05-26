import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[#221e1c]
    text-white

    shadow-[0_12px_30px_rgba(0,0,0,0.18)]

    hover:bg-black
    hover:-translate-y-[2px]
    hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]
  `,

  secondary: `
    border
    border-black/10

    bg-white/30
    text-[#1f1a17]

    backdrop-blur-md

    hover:bg-white/50
    hover:-translate-y-[2px]
  `,

  ghost: `
    bg-transparent
    text-[#1f1a17]

    hover:bg-black/[0.04]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: `
    h-10
    px-5
    text-sm
  `,

  md: `
    h-12
    px-7
    text-sm
  `,

  lg: `
    h-14
    px-8
    text-base
  `,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          `
            inline-flex
            items-center
            justify-center

            rounded-full

            font-medium
            tracking-[-0.01em]

            transition-all
            duration-500

            active:scale-[0.98]

            disabled:pointer-events-none
            disabled:opacity-50
          `,

          variantStyles[variant],
          sizeStyles[size],

          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
