import ButtonSvg from "../assets/svg/ButtonSvg";
import { cn } from "../utils/cn";

export const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = cn(
    "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1",
    px && "px",
    white ? "text-n-8" : "text-n-1",
    className,
  );

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return renderButton();
};
