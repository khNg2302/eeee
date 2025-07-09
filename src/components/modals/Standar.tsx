import { ReactNode } from "react";
import { FloatContainer } from "../FloatComponent";

export type ModalI = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export const Modal = ({ children, isOpen, handleClose }: ModalI) => {
  return (
    <>
      {isOpen && (
        <FloatContainer.CenterBox isOpen={isOpen} handleClose={handleClose}>
          <div className="relative shadow  max-w-full rounded-[1rem] p-[1rem] bg-white">
            <button
              className="absolute bottom-full right-0"
              onClick={handleClose}
            >
              Close
            </button>
            {children}
          </div>
        </FloatContainer.CenterBox>
      )}
    </>
  );
};
