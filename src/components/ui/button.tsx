import { forwardRef } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    border-[3px]
    border-[#2f221d]

    bg-[#d96c3d]

    text-[#fff5e9]

    shadow-[0_8px_0_#2f221d,0_18px_40px_rgba(0,0,0,0.18)]

    hover:translate-y-[3px]
    hover:shadow-[0_4px_0_#2f221d,0_10px_22px_rgba(0,0,0,0.18)]
  `,

  secondary: `
    border-[3px]
    border-[#2f221d]

    bg-[#f6eadf]

    text-[#2f221d]

    shadow-[0_8px_0_#2f221d,0_16px_30px_rgba(0,0,0,0.12)]

    hover:translate-y-[3px]
    hover:shadow-[0_4px_0_#2f221d,0_10px_18px_rgba(0,0,0,0.14)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: `
    h-12
    px-6

    text-[11px]
  `,

  md: `
    h-14
    px-8

    text-[12px]
  `,

  lg: `
    h-16
    px-10

    text-[13px]
  `,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
            group
            relative

            inline-flex
            items-center
            justify-center

            overflow-hidden

            rounded-[999px]

            font-black
            uppercase

            tracking-[0.18em]

            transition-all
            duration-300

            active:translate-y-[5px]
            active:shadow-[0_2px_0_#2f221d]

            disabled:pointer-events-none
            disabled:opacity-50
          `,

          variantStyles[variant],
          sizeStyles[size],

          className,
        )}
        {...props}
      >
        {/* PAPER TEXTURE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.14]
            mix-blend-multiply
          '
          style={{
            backgroundImage: "url('/images/wrm-paper/carton.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* HALFTONE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.15]
            mix-blend-soft-light
          '
          style={{
            backgroundImage:
              "url('/images/halftone-dots/monochrome-dots.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* PRINT HIGHLIGHT */}
        <div
          className='
            absolute
            left-[6%]
            top-[10%]

            h-[34%]
            w-[88%]

            rounded-full

            bg-white/16

            blur-[6px]
          '
        />

        {/* INNER BORDER */}
        <div
          className='
            absolute
            inset-[3px]

            rounded-[999px]

            border-[2px]
            border-white/10
          '
        />

        {/* LABEL */}
        <span
          className='
            relative
            z-20

            flex
            items-center
            gap-3
          '
        >
          <span>{children}</span>

          <span
            className='
              relative

              top-[-1px]

              text-[14px]

              transition-transform
              duration-300

              group-hover:translate-x-[2px]
            '
          >
            →
          </span>
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
