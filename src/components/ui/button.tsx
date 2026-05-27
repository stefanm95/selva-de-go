import { forwardRef } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "editorial"
  | "utility"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonShape = "pill" | "circle";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
};

const variantStyles: Record<ButtonVariant, string> = {
  /* HERO CTA */
  primary: `
    border-[3px]
    border-[#2f221d]

    bg-[#d96c3d]
    text-[#f6eadf]

    shadow-[0_8px_0_#2f221d,0_18px_40px_rgba(0,0,0,0.18)]

    hover:translate-y-[3px]
    hover:shadow-[0_4px_0_#2f221d,0_10px_22px_rgba(0,0,0,0.18)]
  `,

  /* LIGHT PAPER BUTTON */
  secondary: `
    border-[3px]
    border-[#2f221d]

    bg-[#f6eadf]
    text-[#2f221d]

    shadow-[0_8px_0_#2f221d,0_16px_30px_rgba(0,0,0,0.12)]

    hover:translate-y-[3px]
    hover:shadow-[0_4px_0_#2f221d,0_10px_18px_rgba(0,0,0,0.14)]
  `,

  /* NAV / SYSTEM BUTTON */
  editorial: `
    border-[2px]
    border-[#2b211d]

    bg-[#f7ecdf]
    text-[#2b211d]

    shadow-[0_5px_0_#2b211d,0_10px_24px_rgba(0,0,0,0.08)]

    hover:translate-y-[2px]
    hover:shadow-[0_2px_0_#2b211d,0_6px_14px_rgba(0,0,0,0.08)]
  `,

  /* FLOATING ICON UTILITIES */
  utility: `
    border
    border-[#2b211d]/10

    bg-white/40
    text-[#2b211d]

    backdrop-blur-[8px]

    shadow-[0_4px_12px_rgba(0,0,0,0.06)]

    hover:bg-white/72
    hover:translate-y-[1px]
  `,

  /* MINIMAL */
  ghost: `
    border
    border-transparent

    bg-transparent
    text-[#2f221d]

    hover:bg-black/[0.04]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: `
    h-11
    px-5

    text-[10px]
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

const shapeStyles: Record<ButtonShape, string> = {
  pill: `
    rounded-[1rem]
  `,

  circle: `
    rounded-[1rem]

    p-0
  `,
};

const circleSizeStyles: Record<ButtonSize, string> = {
  sm: `
    h-11
    w-11
  `,

  md: `
    h-12
    w-12
  `,

  lg: `
    h-14
    w-14
  `,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      shape = "pill",
      children,
      ...props
    },
    ref,
  ) => {
    const isUtility = variant === "utility" || variant === "ghost";

    return (
      <button
        ref={ref}
        className={cn(
          `
            group
            relative

            inline-flex
            shrink-0
            items-center
            justify-center

            overflow-hidden

            font-black
            uppercase

            tracking-[0.18em]

            transition-all
            duration-300

            active:translate-y-[5px]

            disabled:pointer-events-none
            disabled:opacity-50
          `,

          variantStyles[variant],

          shape === "circle" ? circleSizeStyles[size] : sizeStyles[size],

          shapeStyles[shape],

          !isUtility &&
            `
              active:shadow-[0_2px_0_#2f221d]
            `,

          className,
        )}
        {...props}
      >
        {/* TEXTURE SYSTEM */}
        {!isUtility && (
          <>
            {/* PAPER TEXTURE */}
            <div
              className="
                absolute
                inset-0

                opacity-[0.24]
                mix-blend-multiply
              "
              style={{
                backgroundImage: "url('/images/wrm-paper/carton.jfif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* HALFTONE */}
            <div
              className="
                absolute
                inset-0

                opacity-[0.15]
                mix-blend-soft-light
              "
              style={{
                backgroundImage:
                  "url('/images/halftone-dots/monochrome-dots.jfif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* PRINT HIGHLIGHT */}
            <div
              className="
                absolute
                left-[6%]
                top-[10%]

                h-[34%]
                w-[88%]

                rounded-full

                bg-white/16

                blur-[6px]
              "
            />

            {/* INNER BORDER */}
            <div
              className="
                absolute
                inset-[3px]

                rounded-[inherit]

                border-[2px]
                border-white/10
              "
            />
          </>
        )}

        {/* LABEL */}
        <span
          className="
            relative
            z-20

            flex
            items-center
            justify-center

            gap-3
          "
        >
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
