import { FloatContainer } from "../FloatComponent";
import { ModalI, ModalProvider } from "./ModalProvider";

export const Modal = ({ children, isOpen, handleClose }: ModalI) => {
  return (
    <ModalProvider isOpen={isOpen} handleClose={handleClose}>
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
    </ModalProvider>
  );
};
