import type { ReactNode } from "react";

type LayeredPortraitProps = {
  ariaLabel: string;
  backdropClassName: string;
  children: ReactNode;
  containerClassName: string;
  portraitClassName: string;
};

export function LayeredPortrait({
  ariaLabel,
  backdropClassName,
  children,
  containerClassName,
  portraitClassName,
}: LayeredPortraitProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={`relative mx-auto ${containerClassName}`}
      role="img"
    >
      <div className={`absolute border-[8px] ${backdropClassName}`} />
      <div
        className={`absolute z-10 flex items-center justify-center border-[8px] ${portraitClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
