import type {
ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary"; // Esse é um union type do Typescript 

type BaseProps = {
  children: ReactNode; // conteúdo dentro do botão
  variant?: ButtonVariant; // define se o botão é primário ou secundário
  className?: string; // permite adicionar classes Tailwind específicas 
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
  };

type Props = ButtonProps | LinkProps;

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 " +
  "rounded-button px-6 py-3 font-body text-sm font-semibold " +
  "transition-colors duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible: outline-accent";

const variantStyles: Record<ButtonVariant, string> = { // estilos reutilizáveis, O Record Button exige que todas as variantes possuam 
  // um conjunto de estilos
  primary: "bg-primary text-white hover:bg-accent",

  secondary:
    "border-primary bg-transparent text-primary " +
    "hover:bg-primary hover:text-white",
};

export function Button(props: Props) {
  const { children, variant = "primary", className = "" } = props;

  const styles = [baseStyles, variantStyles[variant], className].join(" ");

  if (typeof props.href === "string") { // renderização opcional
    const { href, ...rest } = props as LinkProps;

    return (
      <a {...rest} href={href} className={styles}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonProps;

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      className={styles}
    >
      {children}
    </button>
  );
}
