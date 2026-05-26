import { forwardRef } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    border
    border-[#8f3e35]/30

    bg-[linear-gradient(180deg,#7a3240_0%,#5a2435_100%)]

    text-[#fff7f1]

    shadow-[0_20px_50px_rgba(0,0,0,0.22)]

    hover:shadow-[0_28px_70px_rgba(0,0,0,0.28)]
    hover:-translate-y-[3px]
  `,

  secondary: `
    border
    border-[#7a3b45]/12

    bg-[#fff7f0]/60

    text-[#2b2421]

    shadow-[0_10px_30px_rgba(0,0,0,0.06)]

    backdrop-blur-xl

    hover:bg-[#fff9f4]
    hover:-translate-y-[2px]
  `,

  ghost: `
    bg-transparent

    text-[#2b2421]

    hover:bg-black/[0.04]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: `
    h-11
    px-5

    text-[11px]
  `,

  md: `
    h-13
    px-7

    text-[12px]
  `,

  lg: `
    h-15
    px-9

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

            font-medium
            uppercase

            tracking-[0.18em]

            transition-all
            duration-700
            ease-out

            active:scale-[0.985]

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

            opacity-[0.08]
            mix-blend-overlay
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

            opacity-[0.05]
            mix-blend-soft-light
          '
          style={{
            backgroundImage:
              "url('/images/halftone-dots/monochrome-dots.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* TOP GLOSS */}
        <div
          className='
            absolute
            left-[8%]
            top-[6%]

            h-[45%]
            w-[84%]

            rounded-full

            bg-white/[0.08]

            blur-[10px]

            transition-all
            duration-700

            group-hover:translate-y-[-2px]
            group-hover:bg-white/[0.12]
          '
        />

        {/* EDGE LIGHT */}
        <div
          className='
            absolute
            inset-[1px]

            rounded-[999px]

            border
            border-white/10
          '
        />

        {/* INNER SHADOW */}
        <div
          className='
            absolute
            inset-0

            shadow-[inset_0_-8px_14px_rgba(0,0,0,0.14)]
          '
        />

        {/* AMBIENT GLOW */}
        <div
          className='
            absolute
            left-1/2
            top-1/2

            h-[120%]
            w-[120%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#ffcf9d]/0

            blur-[30px]

            transition-all
            duration-700

            group-hover:bg-[#ffcf9d]/10
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

          {variant === "primary" && (
            <span
              className='
                flex
                h-5
                w-5

                items-center
                justify-center

                rounded-full

                border
                border-white/14

                bg-white/10

                transition-transform
                duration-700

                group-hover:translate-x-[2px]
              '
            >
              →
            </span>
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
