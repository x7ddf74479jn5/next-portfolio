import * as React from "react";

export type ModalType = "CHAT_BOT" | "CONTACT" | "DRAWER" | null;

export type State = {
  isModalOpen: boolean;
  modalType: ModalType | undefined;
  data: any;
};

type Action =
  | {
      type: "OPEN";
      modal: ModalType;
      data?: any;
    }
  | { type: "CLOSE" };

const initialStateFactory = (initialState?: Partial<State>): State => {
  return {
    isModalOpen: false,
    modalType: undefined,
    data: null,
    ...initialState,
  };
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "OPEN":
      return {
        isModalOpen: true,
        modalType: action.modal,
        data: action.data,
      };
    case "CLOSE":
      return { isModalOpen: false, modalType: null, data: null };

    default:
      throw new Error("未定義");
  }
};

export const useModalCore = (initialState?: Partial<State>) => {
  const [state, dispatch] = React.useReducer(reducer, initialStateFactory(initialState));

  const openModal = React.useCallback(
    (modalType: ModalType, data: any) => {
      dispatch({ type: "OPEN", modal: modalType, data: data });
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
};
