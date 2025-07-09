import { ReactNode } from "react";
import { FloatContainer } from "./FloatComponent";

type DropDown = {
  children: ReactNode;
};

type DropDownContent = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  handleClose?: () => void;
};

export const DropDownContainer = ({ children }: DropDown) => {
  return (
    <FloatContainer>
      <div className="px-2 py-1">{children}</div>
    </FloatContainer>
  );
};

const DropDownContent = ({
  children,
  isOpen,
  handleClose,
  className,
}: DropDownContent) => {
  return (
    isOpen && (
      <FloatContainer.PositionBox
        isOpen={isOpen}
        handleClose={handleClose}
        className={className}
      >
        {children}
      </FloatContainer.PositionBox>
    )
  );
};

export interface DropDownItem {
  label: string;
  onClick?: () => void;
}

const DropDownItem = ({ label, onClick }: DropDownItem) => {
  return (
    <button
      className={`px-2 py-1 flex hover:bg-gray-200 w-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

DropDownContainer.Content = DropDownContent;
DropDownContainer.Item = DropDownItem;
