import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 " +
  "rounded-button px-6 py-3 font-body text-base font-semibold " +
  "transition-colors duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-accent";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-accent-strong",
  secondary:
    "border border-primary bg-transparent text-primary " +
    "hover:bg-primary hover:text-white",
};

export function Button(props: Props) {
  const styles = [
    baseStyles,
    variantStyles[props.variant ?? "primary"],
    props.className ?? "",
  ].join(" ");

  if (typeof props.href === "string") {
    const { children, variant, className, href, target, rel, ...rest } = props;
    // Props de apresentação não devem ser repassadas ao elemento nativo.
    void variant;
    void className;
    const safeRel = target === "_blank"
      ? Array.from(new Set([
          ...(rel?.split(/\s+/).filter(Boolean) ?? []),
          "noopener",
          "noreferrer",
        ])).join(" ")
      : rel;

    return (
      <a
        {...rest}
        href={href}
        target={target}
        rel={safeRel}
        className={styles}
      >
        {children}
      </a>
    );
  }

  const { children, variant, className, ...rest } = props as ButtonProps;
  void variant;
  void className;

  return (
    <button
      {...rest}
      type={rest.type ?? "button"}
      className={`${styles} disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
