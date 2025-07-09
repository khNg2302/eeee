import { usePositionFloatComp } from "@/hooks/floatComponent/usePositionFloatComp";
import { ReactNode, Ref } from "react";

type FloatContainer = {
  children: ReactNode;
};

type FloatPart = {
  children: ReactNode;
  isOpen: boolean;
  handleClose?: () => void;
  className?: string;
  ref?: Ref<HTMLDivElement>;
};

export const FloatContainer = ({ children }: FloatContainer) => {
  return <div className="relative">{children}</div>;
};

const FloatBox = ({
  children,
  isOpen,
  className,
  handleClose,
  ref,
}: FloatPart) => {
  const visible = isOpen ? "visible" : "invisible";
  return (
    <>
      <div className={`flex fixed inset-0 z-0 ${visible}`}>
        <div className="absolute inset-0 z-10" onClick={handleClose}></div>
      </div>
      <div ref={ref} className={`z-20 px-2 py-1 ${visible} ${className}`}>
        {children}
      </div>
    </>
  );
};

const FloatCenterBox = ({
  children,
  isOpen,
  className,
  handleClose,
}: FloatPart) => {
  return (
    <FloatBox
      isOpen={isOpen}
      handleClose={handleClose}
      className={
        "fixed top-1/2 left-1/2 -translate-1/2 max-w-screen overflow-auto" +
        className
      }
    >
      {children}
    </FloatBox>
  );
};

const FloatPositionBox = ({
  isOpen,
  handleClose,
  children,
  className,
}: FloatPart) => {
  const { ref, position, maxOffset } = usePositionFloatComp();

  const positionTop = position?.top ? "top-full" : "bottom-full";
  const positionLeft = position?.left ? "right-0" : "left-0";
  const maxHeight = `max-h-[${maxOffset?.maxHeight}px]`;
  const maxWidth = `max-w-[${maxOffset?.maxWidth}px]`;

  return (
    <FloatBox
      ref={ref}
      isOpen={isOpen}
      handleClose={handleClose}
      className={`absolute ${positionTop} ${positionLeft} ${maxHeight} ${maxWidth} ${className}`}
    >
      <div className={`${maxWidth} ${maxHeight} overflow-auto`}>{children}</div>
    </FloatBox>
  );
};

FloatContainer.CenterBox = FloatCenterBox;
FloatContainer.PositionBox = FloatPositionBox;
