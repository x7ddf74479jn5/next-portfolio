import * as React from "react";

export type ModalType = "CHAT_BOT" | "CONTACT" | "DRAWER";

export type State = {
  isOpen: boolean;
  modalType: ModalType | undefined;
};

type Action =
  | {
      type: "OPEN";
      modal: ModalType;
    }
  | { type: "CLOSE" };

const initialStateFactory = (initialState?: Partial<State>): State => ({
  isOpen: false,
  modalType: undefined,
  ...initialState,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "OPEN":
      return {
        isOpen: true,
        modalType: action.modal,
      };
    case "CLOSE":
      return { ...state, isOpen: false };

    default:
      throw new Error("未定義");
  }
};

export function useModalCore(initialState?: Partial<State>) {
  const [state, dispatch] = React.useReducer(reducer, initialStateFactory(initialState));

  const openModal = React.useCallback(
    (modalType: ModalType) => {
      dispatch({ type: "OPEN", modal: modalType });
    },
    [dispatch]
  );
  const closeModal = React.useCallback(() => {
    dispatch({ type: "CLOSE" });
  }, [dispatch]);
  //
  return {
    state,
    openModal,
    closeModal,
  } as const;
}
