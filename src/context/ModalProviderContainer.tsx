import * as React from "react";
import type { ModalType, State } from "src/hooks/useModalCore";
import { useModalCore } from "src/hooks/useModalCore";

export const ModalStateContext = React.createContext<State | undefined>(undefined);

type ModalDispatch = {
  openModal: (modalType: ModalType, data?: any) => void;
  closeModal: () => void;
};

export const ModalDispatchContext = React.createContext<ModalDispatch | undefined>(undefined);

type Props = {
  initialState?: Partial<State>;
};

export const ModalProviderContainer: React.FC<Props> = ({ children, initialState }) => {
  const { state, openModal, closeModal } = useModalCore(initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={{ openModal, closeModal }}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
