import { createContext, ReactNode, useContext } from "react";

export const ModalProvider = (props: ModalI) => {
  const value = props;

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};

export type ModalI = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const ModalContext = createContext<ModalI>({
  children: null,
  isOpen: false,
  handleClose: () => {},
});

export const useModalContext = () => {
  return useContext(ModalContext);
};
