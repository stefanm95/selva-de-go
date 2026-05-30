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
  border-[4px]
  border-[#241915]

  bg-[#d96c3d]
  text-[#fff7ef]

  shadow-[8px_8px_0px_#241915]

  hover:translate-x-[2px]
  hover:translate-y-[2px]

  hover:shadow-[6px_6px_0px_#241915]
`,

  /* LIGHT PAPER BUTTON */
  secondary: `
  border-[4px]
  border-[#241915]

  bg-[#f6eadf]
  text-[#241915]

  shadow-[8px_8px_0px_#241915]

  hover:translate-x-[2px]
  hover:translate-y-[2px]

  hover:shadow-[6px_6px_0px_#241915]
`,

  /* NAV / SYSTEM BUTTON */
  editorial: `
  border-[3px]
  border-[#241915]

  bg-[#efe1cf]
  text-[#241915]

  shadow-[5px_5px_0px_#241915]

  hover:translate-x-[1px]
  hover:translate-y-[1px]

  hover:shadow-[4px_4px_0px_#241915]
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
  h-[72px]
  px-12

  text-[14px]
`,
};

const shapeStyles: Record<ButtonShape, string> = {
  pill: `
    rounded-full
  `,

  circle: `
    rounded-full

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

            font-poster
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
              className='
                absolute
                inset-0

                opacity-[0.24]
                mix-blend-multiply
              '
              style={{
                backgroundImage: "url('/images/wrm-paper/carton.jfif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </>
        )}

        {/* LABEL */}
        <span
          className='
            relative
            z-20

            flex
            items-center
            justify-center

            gap-3
          '
        >
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
