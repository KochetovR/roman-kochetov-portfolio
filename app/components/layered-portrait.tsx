import type { ReactNode } from "react";

type LayeredPortraitProps = {
  backdropClassName: string;
  children: ReactNode;
  containerClassName: string;
  portraitClassName: string;
};

export function LayeredPortrait({
  backdropClassName,
  children,
  containerClassName,
  portraitClassName,
}: LayeredPortraitProps) {
  return (
    <div className={`relative mx-auto ${containerClassName}`}>
      <div aria-hidden="true" className={`absolute border-[8px] ${backdropClassName}`} />
      <div
        className={`absolute z-10 overflow-hidden border-[8px] ${portraitClassName}`}
      >
        <div className="relative h-full w-full">{children}</div>
      </div>
    </div>
  );
}
